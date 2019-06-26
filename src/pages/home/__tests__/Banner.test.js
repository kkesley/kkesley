import React from 'react'
import { shallow } from 'enzyme'
import Banner from '../Banner'

import BannerImage from 'assets/developer.jpg'

describe('Banner Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Banner />)
    })
    it('has the correct title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Kendrick Kesley')
    })
    it('has the correct subtitle', () => {
        const subtitle = wrapper.find('h2').first()
        expect(subtitle.text()).toBe('is a Developer')
    })
    it('has the correct image', () => {
        const image = wrapper.find('img').first()
        expect(image.props().src).toBe(BannerImage)
    })
})