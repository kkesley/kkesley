import React from 'react';
import { shallow } from 'enzyme'
import Project from '../Project'

describe('Project Component', () => {
    let wrapper
    const props = {
        content: {
            projects: [{
                title: 'A',
                year: 'yA',
                contents: ['a1', 'a2', 'a3']
            }, {
                title: 'B',
                year: 'yB',
                contents: ['b1', 'b2']
            }]
        }
    }
    beforeEach(() => {
        wrapper = shallow(<Project {...props} />)
    })
    it('has appropriate title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toBe('Projects')
    })
    it('has correct project list', () => {
        const articles = wrapper.find('article')
        expect(articles.length).toBe(props.content.projects.length)
        articles.forEach((article, idx) => {
            const title = article.find('h3').first()
            const project = props.content.projects[idx]
            expect(title.text()).toContain(project.title)
            expect(title.text()).toContain(project.year)
            expect(article.find('li').length).toBe(project.contents.length)
            article.find('li').forEach((content, cIdx) => {
                expect(content.text()).toEqual(project.contents[cIdx])
            })
        })
    })
})