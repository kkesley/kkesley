import React from 'react';
import { shallow } from 'enzyme'
import BlogList from '../BlogList';

import Banner from '../Banner'
import Blog from '../Blog'

describe('BlogList Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<BlogList />)
    })
    it('has Banner Component', () => {
        const banner = wrapper.find(Banner)
        expect(banner.length).toBe(1)
    })
    it('has <hr />', () => {
        const line = wrapper.find('hr')
        expect(line.length).toBe(1)
    })
    it('has Blog Component', () => {
        const blog = wrapper.find(Blog)
        expect(blog.length).toBe(1)
    })
})