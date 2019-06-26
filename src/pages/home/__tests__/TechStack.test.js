import React from 'react';
import { shallow } from 'enzyme'

import TechStack from '../TechStack';


describe('TechStack Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<TechStack />)
    })
    it('has the correct title', () => {
        const title = wrapper.find('h2').first()
        expect(title.text()).toBe('Favourite Tech Stack')
    })
    it('has the correct subtitle', () => {
        const title = wrapper.find('p').first()
        expect(title.text()).toBe('Subject to change!')
    })
    it('test', () => {
        console.log(wrapper.debug())
    })
})