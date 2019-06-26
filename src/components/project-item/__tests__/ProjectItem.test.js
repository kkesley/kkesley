import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import ProjectItem from '../ProjectItem'

describe('ProjectItem Component', () => {
    let props
    const makeWrapper = props => mount(
        <MemoryRouter>
            <ProjectItem {...props} />
        </MemoryRouter>
    )
    beforeEach(() => {
        props = {
            project: {
                title: 'title',
                poster_url: 'poster.png',
                project_id: 'id',
            }
        }
    })
    describe('with Full Information', () => {
        let wrapper
        beforeEach(() => {
            wrapper = makeWrapper(props)
        })
        it('has correct title element', () => {
            expect(wrapper.find('h4').first().text()).toBe(props.project.title)
        })
        it('has correct poster', () => {
            const imageProps = wrapper.find('img').first().props()
            expect(imageProps.src).toBe(props.project.poster_url)
            expect(imageProps.alt).toBe(props.project.title)
        })
        it('has correct link', () => {
            expect(wrapper.find(Link).first().props().to).toBe(`/projects/${props.project.project_id}`)
        })
    })
})