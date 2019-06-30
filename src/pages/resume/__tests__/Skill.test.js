import React from 'react';
import { shallow } from 'enzyme'
import Skill from '../Skill'

describe('skill Component', () => {
    let wrapper
    const props = {
        content: {
            skills: [{
                section: 'A',
                contents: ['a1', 'a2', 'a3']
            }, {
                section: 'B',
                contents: ['b1', 'b2']
            }]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Skill {...props} />)
    })
    it('has appropriate title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Skills')
    })
    it('has correct skill list', () => {
        const articles = wrapper.find('article')
        expect(articles.length).toBe(props.content.skills.length)
        articles.forEach((article, idx) => {
            const title = article.find('h3').first()
            const skill = props.content.skills[idx]
            expect(title.text()).toBe(skill.section)
            expect(article.find('li').length).toBe(skill.contents.length)
            article.find('li').forEach((content, cIdx) => {
                expect(content.text()).toEqual(skill.contents[cIdx])
            })
        })
    })
})