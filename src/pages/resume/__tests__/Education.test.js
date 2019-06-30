import React from 'react';
import { shallow } from 'enzyme'
import Education from '../Education'

describe('Education Component', () => {
    let wrapper
    const props = {
        content: {
            educations: [{
                title: 'A',
                year_completion: 'yA',
                university: 'uA',
                image: 'iA',
                contents: ['a1', 'a2', 'a3']
            }, {
                title: 'B',
                year_completion: 'yB',
                university: 'uB',
                image: 'iB',
                contents: ['b1', 'b2']
            }]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Education {...props} />)
    })
    it('has appropriate title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Education')
    })
    it('has correct education list', () => {
        const articles = wrapper.find('article')
        expect(articles.length).toBe(props.content.educations.length)
        articles.forEach((article, idx) => {
            const image = article.find('img').first()
            const title = article.find('.media-content').find('p').first()
            const education = props.content.educations[idx]
            expect(image.props().src).toBe(education.image)
            expect(title.text()).toContain(education.title)
            expect(title.text()).toContain(education.year_completion)
            expect(title.text()).toContain(education.university)
        })
    })
})