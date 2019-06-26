import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro'
import { mount } from 'enzyme'
import wait from 'waait'

import Spinner from 'components/spinner'

import Banner from '../Banner'
import ProjectDetail from '../ProjectDetail';

const showProject = loader('graphql/showProject.graphql')

describe('ProjectDetail Component', () => {
    const id = '1'
    let mock
    let wrapper

    beforeEach(() => {
        mock = {
            request: {
                query: showProject,
                variables: { project_id: id }
            },
            result: {
                data: {
                    showProject: { project_id: id, poster_url: '1.png', title: 'title:1', year: 'year:1', content: 'content:1'}
                },
            },
        }
    })

    const makeWrapper = mock => {
        return mount(
            <MockedProvider mocks={mock ? [mock] : []} addTypename={false}>
                <MemoryRouter initialEntries={['/projects/1']}>
                    <Route path="/projects/:project" component={ProjectDetail}/>
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
    it('handles null project', async () => {
        mock.result.data.showProject = null
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain('Project not found')
    })
    it('handles empty data', async () => {
        mock.result.data = {}
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain('Project not found')
    })
    it('has correct project', async () => {
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).find(Banner).length).toBe(1)
        const project = mock.result.data.showProject
        expect(wrapper.find(Query).find(Banner).props().project).toEqual({ title: project.title, year: project.year, poster_url: project.poster_url})
        expect(wrapper.find(Query).find('ReactMarkdown').props().source).toEqual(project.content)
    })

    describe('ReactMarkdown Link', () => {
        it('correctly parse external link', async () => {
            mock.result.data.showProject.content = '[link](https://link.com)'
            wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            const props = wrapper.find(Query).find('ReactMarkdown').find('a').props()
            expect(props.href).toBe('https://link.com')
            expect(props.rel).toBe('nofollow noreferrer noopener')
            expect(props.target).toBe('_blank')
        })
        it('correctly parse internal lins', async () => {
            mock.result.data.showProject.content = '[link](/projects/test)'
            wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).find('ReactMarkdown').find(Link).props().to).toBe('/projects/test')
        })
    })
})