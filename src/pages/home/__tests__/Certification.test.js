import React from 'react';
import { shallow } from 'enzyme'
import Certification from '../Certification';

import ImageAWSCSAA from 'assets/certifications/AWS-CSAA.jpg'

describe('Certification Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Certification />)
    })
    it('has the correct title', () => {
        const title = wrapper.find('h2').first()
        expect(title.text()).toBe('Certifications')
    })
    it('has the correct image for AWS Certified Solutions Architect - Associate', () => {
        const image = wrapper.find('img').findWhere(n => n.prop('src') === ImageAWSCSAA)
        expect(image.props().alt).toBe('AWS Certified Solutions Architect - Associate')
    })
})