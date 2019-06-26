import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
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
})