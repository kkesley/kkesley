import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import ScrollToTop from '../ScrollToTop'

describe('ScrollToTop Component', () => {
    let wrapper
    window.scrollTo = jest.fn()
    const Component = () => <div>hello</div>
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <ScrollToTop>
                    <Component />
                </ScrollToTop>
            </MemoryRouter>
        )
    })
    it('has Component element', () => {
        expect(wrapper.find(Component).length).toBe(1)
    })
    it('calls window.scrollTo with (0, 0)', () => {
        expect(window.scrollTo).toBeCalledWith(0, 0)
    })
})