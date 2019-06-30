import React from 'react'
import { Link, MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import Banner from '../Banner'

describe('Banner Component', () => {
    let wrapper
    const props = {
        content: {
            personal_detail: {
                name: 'Kendrick Kesley',
                job_title: 'Software Developer',
                email: 'kendrick.kesley.dev@gmail.com',
                location: 'Melbourne, Australia'
            },
        },
        downloadResume: jest.fn(),
    }
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <Banner {...props} />
            </MemoryRouter>
        )
    })
    it('has the correct title', () => {
        const title = wrapper.find('h1').first()
        expect(title.text()).toContain(props.content.personal_detail.name)
    })
    it('has the correct subtitle', () => {
        const subtitle = wrapper.find('h2').first()
        expect(subtitle.text()).toBe(props.content.personal_detail.job_title)
    })
    it('contains email', () => {
        const subtitle = wrapper.find('h3').first()
        expect(subtitle.text()).toContain(props.content.personal_detail.email)
    })
    it('contains location', () => {
        const subtitle = wrapper.find('h3').first()
        expect(subtitle.text()).toContain(props.content.personal_detail.location)
    })
    it('calls the correct method when `download resume` button is clicked', () => {
        expect(wrapper.find('#download-resume-button').length).toBe(1)
        wrapper.find('#download-resume-button').simulate('click')
        expect(props.downloadResume).toBeCalled()
    })
    it('has correct breadcrumb links', () => {
        const links = wrapper.find(Link)
        expect(links.length).toBe(2)
        expect(links.at(0).props().to).toBe('/')
        expect(links.at(1).props().to).toBe('/resume')
    })
})