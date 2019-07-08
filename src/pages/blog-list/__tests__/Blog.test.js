import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro'
import { mount } from 'enzyme'
import wait from 'waait'

import Spinner from 'components/spinner'
import BlogItem from 'components/blog-item'

import Blog from '../Blog';

const listBlogsQuery = loader('graphql/listBlogs.graphql')

describe('Blog Component', () => {
    describe('General Condition', () => {
        let mock

        beforeEach(() => {
            mock = {
                request: {
                    query: listBlogsQuery,
                    variables: { next_token: null }
                },
                result: {
                    data: {
                        listBlogs: {
                            items: [ { blog_id: '1', title: 'title:1', timestamp: 'time:1', tags: ['t:1a', 't:1b']} ],
                            next_token: 'testing'
                        },
                    },
                },
            }
        })

        const makeWrapper = mock => {
            return mount(
                <MemoryRouter>
                    <MockedProvider mocks={mock ? [mock] : []} addTypename={false}>
                        <Blog />
                    </MockedProvider>
                </MemoryRouter>
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
        it('handles empty items', async () => {
            mock.result.data.listBlogs.items = []
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).text()).toContain('No blogs')
        })
        it('handles undefined items', async () => {
            mock.result.data.listBlogs.items = null
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).text()).toContain('No blogs')
        })
        it('handles empty data', async () => {
            mock.result.data = {}
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).children().length).toBe(0)
        })
        it('has correct blog items', async () => {
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).find(BlogItem).length).toBe(mock.result.data.listBlogs.items.length)
            mock.result.data.listBlogs.items.forEach((blog, idx) => {
                const blogWrapper = wrapper.find(Query).find(BlogItem).at(idx)
                expect(blogWrapper.props().blog).toEqual(blog)
            })
        })
    })

    describe('Load More', () => {
        const mocks = [
            {
                request: {
                    query: listBlogsQuery,
                    variables: { next_token: null }
                },
                result: {
                    data: {
                        listBlogs: {
                            items: [ { blog_id: '1', title: 'title:1', timestamp: 'time:1', tags: ['t:1a', 't:1b']} ],
                            next_token: 'testing'
                        },
                    },
                },
            }, {
                request: {
                    query: listBlogsQuery,
                    variables: { next_token: 'testing' }
                },
                result: {
                    data: {
                        listBlogs: {
                            items: [ { blog_id: '2', title: 'title:2', timestamp: 'time:2', tags: ['t:2a', 't:2b']} ],
                            next_token: null
                        },
                    },
                },
            }
        ]
        let wrapper
        beforeEach(() => {
            wrapper = mount(
                <MemoryRouter>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <Blog />
                    </MockedProvider>
                </MemoryRouter>
            )
        })

        it('can load more contents', async () => {
            await wait(0) // wait for query
            wrapper.update() // update the component to escape loading state

            expect(wrapper.find(Query).find(BlogItem).length).toBe(mocks[0].result.data.listBlogs.items.length)
            mocks[0].result.data.listBlogs.items.forEach((blog, idx) => {
                const blogWrapper = wrapper.find(Query).find(BlogItem).at(idx)
                expect(blogWrapper.props().blog).toEqual(blog)
            })
            expect(wrapper.find(Query).find('#load-more').length).toBe(1)
            wrapper.find(Query).find('#load-more').simulate('click')

            await wait(0) // wait for button become loading
            wrapper.update() // update the component to enter loading state

            expect(wrapper.find(Query).find('#load-more').hasClass('is-loading')).toBe(true)

            await wait(0) // wait for query
            wrapper.update() // update the component to escape loading state

            expect(wrapper.find(Query).find(BlogItem).length).toBe(
                mocks[0].result.data.listBlogs.items.length +
                mocks[1].result.data.listBlogs.items.length
            )

            const combinedItems = [
                ...mocks[0].result.data.listBlogs.items,
                ...mocks[1].result.data.listBlogs.items,
            ]
            combinedItems.forEach((blog, idx) => {
                const blogWrapper = wrapper.find(Query).find(BlogItem).at(idx)
                expect(blogWrapper.props().blog).toEqual(blog)
            })
        })
    })
})