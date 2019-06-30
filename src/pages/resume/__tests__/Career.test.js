import React from 'react';
import { shallow } from 'enzyme'
import Career from '../Career'

describe('Career Component', () => {
    let wrapper
    const props = {
        content: {
            careers: [{
                title: 'A',
                year: 'yA',
                company: 'cA',
                contents: ['a1', 'a2', 'a3']
            }, {
                title: 'B',
                year: 'yB',
                company: 'cB',
                contents: ['b1', 'b2']
            }]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Career {...props} />)
    })
    it('has appropriate title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Career')
    })
    it('has correct career list', () => {
        const articles = wrapper.find('article')
        expect(articles.length).toBe(props.content.careers.length)
        articles.forEach((article, idx) => {
            const title = article.find('h3').first()
            const career = props.content.careers[idx]
            expect(title.text()).toContain(career.title)
            expect(title.text()).toContain(career.year)
            expect(title.text()).toContain(career.company)
            expect(article.find('li').length).toBe(career.contents.length)
            article.find('li').forEach((content, cIdx) => {
                expect(content.text()).toEqual(career.contents[cIdx])
            })
        })
    })
})