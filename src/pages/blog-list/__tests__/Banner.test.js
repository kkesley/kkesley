import React from 'react'
import { Link, MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import Banner from '../Banner'

import ImageBoard from 'assets/board.png'

describe('Banner Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Banner />
            </MemoryRouter>
        )
    })
    it('has the correct title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Blogs')
    })
    it('has the correct subtitle', () => {
        const subtitle = wrapper.find('h2').first()
        expect(subtitle.text()).toBe('Collection of my opinions and thoughts.')
    })
    it('has the correct image', () => {
        const image = wrapper.find('img').first()
        expect(image.props().src).toBe(ImageBoard)
    })
    it('has correct breadcrumb links', () => {
        const links = wrapper.find(Link)
        expect(links.length).toBe(2)
        expect(links.at(0).props().to).toBe('/')
        expect(links.at(1).props().to).toBe('/blogs')
    })
})