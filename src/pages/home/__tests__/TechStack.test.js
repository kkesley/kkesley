import React from 'react';
import { shallow } from 'enzyme'

import TechStack from '../TechStack';


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