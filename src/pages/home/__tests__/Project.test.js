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

const listProjectsQuery = loader('graphql/listProjectsInHome.graphql')

describe('Project Component', () => {
    let mock
    let wrapper

    beforeEach(() => {
        mock = {
            request: {
                query: listProjectsQuery,
            },
            result: {
                data: {
                    listProjectsInHome: {
                        items: [ { project_id: '1', poster_url: '1.png', title: 'title:1', year: 'year:1'} ],
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
        mock.result.data.listProjectsInHome.items = []
        const wrapper = makeWrapper(mock)
        await wait(0)
        wrapper.update()
        expect(wrapper.find(Query).text()).toContain('No projects')
    })
    it('handles undefined items', async () => {
        mock.result.data.listProjectsInHome.items = null
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
        expect(wrapper.find(Query).find(ProjectItem).length).toBe(mock.result.data.listProjectsInHome.items.length)
        mock.result.data.listProjectsInHome.items.forEach((project, idx) => {
            const projectWrapper = wrapper.find(Query).find(ProjectItem).at(idx)
            expect(projectWrapper.props().project).toEqual(project)
        })
    })
})