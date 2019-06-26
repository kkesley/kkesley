import React from 'react';
import { shallow } from 'enzyme'

import TechStack, { Row } from '../TechStack';


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
    describe('Rows', () => {
        let rows
        beforeEach(() => {
            rows = wrapper.find('Row')
        })
        it('has the correct number of rows', () => {
            expect(rows.length).toBe(4)
        })
        it('has the correct title for all rows', () => {
            expect(rows.at(0).props().title).toBe('Mobile Application')
            expect(rows.at(1).props().title).toBe('Web Front-End')
            expect(rows.at(2).props().title).toBe('Back-End')
            expect(rows.at(3).props().title).toBe('Architecture')
        })
    })
})

describe('Row Component', () => {
    let props
    const text = 'hello world'
    const makeWrapper = props => {
        return shallow(<Row {...props}>{text}</Row>)
    }
    beforeEach(() => {
        props = {
            title: 'title',
            images: [{ src: '1.png', alt: '1' }, { src: '2.png', alt: '2' }]
        }
    })
    it('has the correct title', () => {
        const wrapper = makeWrapper(props)
        const title = wrapper.find('p').at(0)
        expect(title.text()).toBe(props.title)
    })
    it('has the correct subtitle', () => {
        const wrapper = makeWrapper(props)
        const description = wrapper.find('p').at(1)
        expect(description.text()).toBe(text)
    })
    it('can render without any images', () => {
        props.images = null
        const wrapper = makeWrapper(props)
        const images = wrapper.find('img')
        expect(images.length).toBe(0)
    })
    it('has correct images', () => {
        const wrapper = makeWrapper(props)
        const images = wrapper.find('img')
        expect(images.length).toBe(props.images.length)
        images.forEach((imageWrapper, idx) => {
            expect(imageWrapper.props().src).toBe(props.images[idx].src)
            expect(imageWrapper.props().alt).toBe(props.images[idx].alt)
            expect(imageWrapper.props().title).toBe(props.images[idx].alt)
        })
    })
})