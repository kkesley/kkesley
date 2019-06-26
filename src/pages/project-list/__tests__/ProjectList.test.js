import React from 'react';
import { shallow } from 'enzyme'
import ProjectList from '../ProjectList';

import Banner from '../Banner'
import Project from '../Project'

describe('ProjectList Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<ProjectList />)
    })
    it('has Banner Component', () => {
        const banner = wrapper.find(Banner)
        expect(banner.length).toBe(1)
    })
    it('has <hr />', () => {
        const line = wrapper.find('hr')
        expect(line.length).toBe(1)
    })
    it('has Project Component', () => {
        const project = wrapper.find(Project)
        expect(project.length).toBe(1)
    })
})