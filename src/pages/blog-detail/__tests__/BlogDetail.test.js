import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro'
import { mount } from 'enzyme'
import wait from 'waait'

import Spinner from 'components/spinner'

import Banner from '../Banner'
import BlogDetail from '../BlogDetail';

const showBlog = loader('graphql/showBlog.graphql')

describe('BlogDetail Component', () => {
    const id = '1'
    let mock
    let wrapper

    beforeEach(() => {
        mock = {
            request: {
                query: showBlog,
                variables: { blog_id: id }
            },
            result: {
                data: {
                    showBlog: { blog_id: id, title: 'title:1', timestamp: '20190712', tags: ['t:1a', 't:1b'], content: 'content:1'}
                },
            },
        }
    })

    const makeWrapper = mock => {
        return mount(
            <MockedProvider mocks={mock ? [mock] : []} addTypename={false}>
                <MemoryRouter initialEntries={['/blogs/1']}>
                    <Route path="/blogs/:blog" component={BlogDetail}/>
                </MemoryRouter>
            </MockedProvider>
        )
    }
    it('has loading spinner', () => {
        const wrapper = makeWrapper().find(Query)
        expect(wrapper.find(Spinner).length).toBe(1)
    })
    it('handles error', async () => {
        const errorMessage = 'aw shucks'
        mock.error = new Error(errorMessage)
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain(errorMessage)
    })
    it('handles null blog', async () => {
        mock.result.data.showBlog = null
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain('Blog not found')
    })
    it('handles empty data', async () => {
        mock.result.data = {}
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain('Blog not found')
    })
    it('has correct blog', async () => {
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).find(Banner).length).toBe(1)
        const blog = mock.result.data.showBlog
        expect(wrapper.find(Query).find(Banner).props().blog).toEqual({ title: blog.title, timestamp: blog.timestamp, blog_id: blog.blog_id})
        expect(wrapper.find(Query).find('ReactMarkdown').props().source).toEqual(blog.content)
    })

    describe('ReactMarkdown Link', () => {
        it('correctly parse external link', async () => {
            mock.result.data.showBlog.content = '[link](https://link.com)'
            wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            const props = wrapper.find(Query).find('ReactMarkdown').find('a').props()
            expect(props.href).toBe('https://link.com')
            expect(props.rel).toBe('nofollow noreferrer noopener')
            expect(props.target).toBe('_blank')
        })
        it('correctly parse internal lins', async () => {
            mock.result.data.showBlog.content = '[link](/blogs/test)'
            wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).find('ReactMarkdown').find(Link).props().to).toBe('/blogs/test')
        })
    })
})