import React from 'react';
import { shallow } from 'enzyme'

import Service from '../Service';

import ImageWeb from 'assets/web.png'
import ImageSystem from 'assets/system.png'
import ImageData from 'assets/data.png'

describe('Service Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Service />)
    })
    it('has the correct titles', () => {
        const titles = wrapper.find('h4')
        expect(titles.length).toBe(3)
        expect(titles.at(0).text()).toBe('Interactive Application')
        expect(titles.at(1).text()).toBe('System Design')
        expect(titles.at(2).text()).toBe('Data Structure')
    })
    it('has the correct images', () => {
        const images = wrapper.find('img')
        expect(images.length).toBe(3)
        expect(images.at(0).props().src).toBe(ImageWeb)
        expect(images.at(1).props().src).toBe(ImageSystem)
        expect(images.at(2).props().src).toBe(ImageData)
    })
})