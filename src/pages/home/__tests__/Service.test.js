import React from 'react';
import { shallow } from 'enzyme'
import dictionary from 'dictionary-en-us'
import nspell from 'nspell'
import removePunctuation from 'remove-punctuation'

import Service from '../Service';

import ImageWeb from 'assets/web.png'
import ImageSystem from 'assets/system.png'
import ImageData from 'assets/data.png'

describe('Service Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Service />)
    })
    it('has the correct titles', () => {
        const titles = wrapper.find('h4')
        expect(titles.length).toBe(3)
        expect(titles.at(0).text()).toBe('Interactive Application')
        expect(titles.at(1).text()).toBe('System Design')
        expect(titles.at(2).text()).toBe('Data Structure')
    })
    it('has the correct images', () => {
        const images = wrapper.find('img')
        expect(images.length).toBe(3)
        expect(images.at(0).props().src).toBe(ImageWeb)
        expect(images.at(1).props().src).toBe(ImageSystem)
        expect(images.at(2).props().src).toBe(ImageData)
    })
    it('does not have typos in descriptions', done => {
        const descriptions = wrapper.find('p')
        expect(descriptions.length).toBe(3)
        dictionary((_, dict) => {
            const spell = nspell(dict)
            spell.dictionary(
                ['scalable', 'NoSQL'].join('\n')
            )
            for (let i = 0; i < 3; i++) {
                removePunctuation(descriptions.at(i).text()).split(" ").forEach(word => {
                    const isCorrect = spell.correct(word)
                    if (!isCorrect) {
                        console.log(`${word} is not a correct word. Either add it in the dictionary or fix the word.`)
                    }
                    expect(isCorrect).toEqual(true)
                })
            }
            done()
        })
    })
})