import React from 'react'
import { mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import BlogItem from '../BlogItem'

describe('BlogItem Component', () => {
    let props
    const makeWrapper = props => mount(
        <MemoryRouter>
            <BlogItem {...props} />
        </MemoryRouter>
    )
    beforeEach(() => {
        props = {
            blog: {
                title: 'title',
                timestamp: '20190712',
                blog_id: 'id',
                tags: ['hello', 'there']
            }
        }
    })
    describe('with Full Information', () => {
        let wrapper
        beforeEach(() => {
            wrapper = makeWrapper(props)
        })
        it('has correct title element', () => {
            expect(wrapper.find('h4').first().text()).toBe(props.blog.title)
        })
        it('has correct year element', () => {
            expect(wrapper.find('p').first().text()).toBe('12 Jul 2019')
        })
        it('has correct link', () => {
            expect(wrapper.find(Link).first().props().to).toBe(`/blogs/${props.blog.blog_id}`)
        })
        it('has correct tags', () => {
            expect(wrapper.find('.tag').length).toBe(props.blog.tags.length)
            for(let i = 0; i < props.blog.tags.length - 1; i++) {
                expect(wrapper.find('.tag').at(i).text()).toBe(props.blog.tags[i])
            }
        })
    })
    describe('with Partial Information', () => {
        it('can render without any props', () => {
            makeWrapper({})
        })
    })
})