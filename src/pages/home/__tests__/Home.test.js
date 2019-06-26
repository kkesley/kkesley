import React from 'react';
import { shallow } from 'enzyme'
import Home from '../Home';

import Banner from '../Banner'
import Service from '../Service'
import Project from '../Project'
import TechStack from '../TechStack'
import Certification from '../Certification'

describe('Home Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Home />)
    })
    it('has Banner Component', () => {
        const banner = wrapper.find(Banner)
        expect(banner.length).toBe(1)
    })
    it('has Service Component', () => {
        const service = wrapper.find(Service)
        expect(service.length).toBe(1)
    })
    it('has Project Component', () => {
        const project = wrapper.find(Project)
        expect(project.length).toBe(1)
    })
    it('has TechStack Component', () => {
        const techStack = wrapper.find(TechStack)
        expect(techStack.length).toBe(1)
    })
    it('has Certification Component', () => {
        const certification = wrapper.find(Certification)
        expect(certification.length).toBe(1)
    })
})