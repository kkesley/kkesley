import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import Banner from '../Banner'

describe('Banner Component', () => {
    let props
    const makeWrapper = props => mount(
        <MemoryRouter>
            <Banner {...props} />
        </MemoryRouter>
    )
    beforeEach(() => {
        props = {
            blog: {
                title: 'title',
                timestamp: '20190712',
                blog_id: 'id',
            }
        }
    })
    describe('with Full Information', () => {
        let wrapper
        beforeEach(() => {
            wrapper = makeWrapper(props)
        })
        it('has correct title element', () => {
            expect(wrapper.find('h1').first().text()).toBe(props.blog.title)
        })
        it('has correct year element', () => {
            expect(wrapper.find('h2').first().text()).toBe('12 Jul 2019')
        })
        it('has correct breadcrumb links', () => {
            const links = wrapper.find(Link)
            expect(links.length).toBe(3)
            expect(links.at(0).props().to).toBe('/')
            expect(links.at(1).props().to).toBe('/blogs')
            expect(links.at(2).props().to).toBe(`/blogs/${props.blog.blog_id}`)
        })
    })
    describe('with Partial Information', () => {
        it('can render without any props', () => {
            makeWrapper({})
        })
    })
})