import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

import ScrollToTop from 'components/scroll-to-top'
import Navigation from 'components/navigation'
import Footer from 'components/footer'

jest.mock('../helper/appsync-client', () => ({}))

describe('App Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('has ApolloProvider', () => {
        expect(wrapper.find('ApolloProvider').length).toBe(1)
    })
    it('has BrowserRouter', () => {
        expect(wrapper.find('BrowserRouter').length).toBe(1)
    })
    it('has ScrollToTop', () => {
        expect(wrapper.find(ScrollToTop).length).toBe(1)
    })
    it('has Navigation', () => {
        expect(wrapper.find(Navigation).length).toBe(1)
    })
    it('has Footer', () => {
        expect(wrapper.find(Footer).length).toBe(1)
    })
    describe('Routings', () => {
        let switchWrapper
        beforeEach(() => {
            switchWrapper =  wrapper.find('Switch')  
        })
        it('has Switch', () => {
            expect(switchWrapper.length).toBe(1)
        })
        it('has Route to Home', () => {
            expect(switchWrapper.find('Route').findWhere(c => c.props().path === '/' && c.props().exact).length).toBe(1)
        })
        it('has Route to Project List', () => {
            expect(switchWrapper.find('Route').findWhere(c => c.props().path === '/projects' && c.props().exact).length).toBe(1)
        })
        it('has Route to Project Detail', () => {
            expect(switchWrapper.find('Route').findWhere(c => c.props().path === '/projects/:project').length).toBe(1)
        })
    })
})