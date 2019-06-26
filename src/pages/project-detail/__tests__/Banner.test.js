import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import Banner from '../Banner'

describe('ProjectItem Component', () => {
    let props
    const makeWrapper = props => mount(
        <MemoryRouter>
            <Banner {...props} />
        </MemoryRouter>
    )
    beforeEach(() => {
        props = {
            project: {
                title: 'title',
                year: 'year',
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
            expect(wrapper.find('h1').first().text()).toBe(props.project.title)
        })
        it('has correct year element', () => {
            expect(wrapper.find('h2').first().text()).toBe(props.project.year)
        })
        it('has correct poster', () => {
            const imageProps = wrapper.find('img').first().props()
            expect(imageProps.src).toBe(props.project.poster_url)
            expect(imageProps.alt).toBe(props.project.title)
        })
        it('has correct breadcrumb links', () => {
            const links = wrapper.find(Link)
            expect(links.length).toBe(3)
            expect(links.at(0).props().to).toBe('/')
            expect(links.at(1).props().to).toBe('/projects')
            expect(links.at(2).props().to).toBe(`/projects/${props.project.project_id}`)
        })
    })
    describe('with Partial Information', () => {
        it('can render without any props', () => {
            makeWrapper({})
        })
    })
})