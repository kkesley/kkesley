import React from 'react'
import { mount } from 'enzyme'
import Footer from '../Footer'

describe('Footer Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<Footer />)
    })
    it('has footer element', () => {
        expect(wrapper.find('footer').length).toBe(1)
    })
})