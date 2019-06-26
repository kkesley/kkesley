import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro'
import { mount } from 'enzyme'
import wait from 'waait'

import Spinner from 'components/spinner'
import ProjectItem from 'components/project-item'

import Project from '../Project';

const listProjectsQuery = loader('graphql/listProjects.graphql')

describe('Project Component', () => {
    describe('General Condition', () => {
        let mock
        let wrapper

        beforeEach(() => {
            mock = {
                request: {
                    query: listProjectsQuery,
                    variables: { next_token: null }
                },
                result: {
                    data: {
                        listProjects: {
                            items: [ { project_id: '1', poster_url: '1.png', title: 'title:1', year: 'year:1'} ],
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
                        <Project />
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
            mock.result.data.listProjects.items = []
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).text()).toContain('No projects')
        })
        it('handles undefined items', async () => {
            mock.result.data.listProjects.items = null
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).text()).toContain('No projects')
        })
        it('handles empty data', async () => {
            mock.result.data = {}
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).children().length).toBe(0)
        })
        it('has correct project items', async () => {
            const wrapper = makeWrapper(mock)
            await wait(0)
            wrapper.update()
            expect(wrapper.find(Query).find(ProjectItem).length).toBe(mock.result.data.listProjects.items.length)
            mock.result.data.listProjects.items.forEach((project, idx) => {
                const projectWrapper = wrapper.find(Query).find(ProjectItem).at(idx)
                expect(projectWrapper.props().project).toEqual(project)
            })
        })
    })

    describe('Load More', () => {
        const mocks = [
            {
                request: {
                    query: listProjectsQuery,
                    variables: { next_token: null }
                },
                result: {
                    data: {
                        listProjects: {
                            items: [ { project_id: '1', poster_url: '1.png', title: 'title:1', year: 'year:1'} ],
                            next_token: 'testing'
                        },
                    },
                },
            }, {
                request: {
                    query: listProjectsQuery,
                    variables: { next_token: 'testing' }
                },
                result: {
                    data: {
                        listProjects: {
                            items: [ { project_id: '2', poster_url: '2.png', title: 'title:2', year: 'year:2'} ],
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
                        <Project />
                    </MockedProvider>
                </MemoryRouter>
            )
        })

        it('can load more contents', async () => {
            await wait(0) // wait for query
            wrapper.update() // update the component to escape loading state

            expect(wrapper.find(Query).find(ProjectItem).length).toBe(mocks[0].result.data.listProjects.items.length)
            mocks[0].result.data.listProjects.items.forEach((project, idx) => {
                const projectWrapper = wrapper.find(Query).find(ProjectItem).at(idx)
                expect(projectWrapper.props().project).toEqual(project)
            })
            expect(wrapper.find(Query).find('#load-more').length).toBe(1)
            wrapper.find(Query).find('#load-more').simulate('click')

            await wait(0) // wait for button become loading
            wrapper.update() // update the component to enter loading state

            expect(wrapper.find(Query).find('#load-more').hasClass('is-loading')).toBe(true)

            await wait(0) // wait for query
            wrapper.update() // update the component to escape loading state

            expect(wrapper.find(Query).find(ProjectItem).length).toBe(
                mocks[0].result.data.listProjects.items.length +
                mocks[1].result.data.listProjects.items.length
            )

            const combinedItems = [
                ...mocks[0].result.data.listProjects.items,
                ...mocks[1].result.data.listProjects.items,
            ]
            combinedItems.forEach((project, idx) => {
                const projectWrapper = wrapper.find(Query).find(ProjectItem).at(idx)
                expect(projectWrapper.props().project).toEqual(project)
            })
        })
    })
})