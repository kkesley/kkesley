import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter, NavLink } from 'react-router-dom'
import Navigation from '../Navigation'

describe('Navigation Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        )
    })
    it('has nav element', () => {
        expect(wrapper.find('nav').length).toBe(1)
    })
    it('has link to home', () => {
        expect(wrapper.find(NavLink).findWhere(c => c.props().to === '/').find(NavLink).length).toBe(1)
    })
    it('has link to projects', () => {
        expect(wrapper.find(NavLink).findWhere(c => c.props().to === '/projects').find(NavLink).length).toBe(1)
    })
    it('has link to blogs', () => {
        expect(wrapper.find(NavLink).findWhere(c => c.props().to === '/blogs').find(NavLink).length).toBe(1)
    })
    it('has link to resume', () => {
        expect(wrapper.find(NavLink).findWhere(c => c.props().to === '/resume').find(NavLink).length).toBe(1)
    })
    it('has correctly displays navigation on mobile', () => {
        expect(wrapper.find('.navbar-burger').length).toBe(1)
        expect(wrapper.find('#navbar-main').length).toBe(1)
        expect(wrapper.find('#navbar-main').hasClass('is-active')).toBe(false)
        wrapper.find('.navbar-burger').simulate('click')
        expect(wrapper.find('#navbar-main').hasClass('is-active')).toBe(true)
        wrapper.find('.navbar-burger').simulate('click')
        expect(wrapper.find('#navbar-main').hasClass('is-active')).toBe(false)
    })
    it('Navigating to other pages hides navbar in mobile', () => {
        wrapper.setState({ isNavActive: true })
        wrapper.find(NavLink).findWhere(c => c.props().to === '/').find(NavLink).simulate('click')
        expect(wrapper.find('#navbar-main').hasClass('is-active')).toBe(false)

        wrapper.setState({ isNavActive: true })
        wrapper.find(NavLink).findWhere(c => c.props().to === '/projects').find(NavLink).simulate('click')
        expect(wrapper.find('#navbar-main').hasClass('is-active')).toBe(false)
    })
})