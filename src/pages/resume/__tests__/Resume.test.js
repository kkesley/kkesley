import React from 'react';
import { shallow } from 'enzyme'
import Resume from '../Resume';

import Banner from '../Banner'
import Career from '../Career'
import Project from '../Project'
import Skill from '../Skill'
import Education from '../Education'

import content from '../content'
import downloadResume from '../downloadResume'

jest.mock('../downloadResume', () => jest.fn().mockImplementation(_ => 'hello'))

describe('Resume Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Resume />)
    })
    it('has Banner Component', () => {
        const banner = wrapper.find(Banner)
        expect(banner.length).toBe(1)
        expect(banner.props().content).toEqual(content)
        expect(downloadResume).toBeCalledWith(content)
        expect(banner.props().downloadResume).toEqual('hello')
        
    })
    it('has Career Component', () => {
        const career = wrapper.find(Career)
        expect(career.length).toBe(1)
        expect(career.props().content).toEqual(content)
    })
    it('has Project Component', () => {
        const project = wrapper.find(Project)
        expect(project.length).toBe(1)
        expect(project.props().content).toEqual(content)
    })
    it('has Skill Component', () => {
        const skill = wrapper.find(Skill)
        expect(skill.length).toBe(1)
        expect(skill.props().content).toEqual(content)
    })
    it('has Education Component', () => {
        const education = wrapper.find(Education)
        expect(education.length).toBe(1)
        expect(education.props().content).toEqual(content)
    })
})