import React from 'react'
import { mount } from 'enzyme'
import Spinner from '../Spinner'

describe('Spinner Component', () => {
    it('renders without crashing', () => {
        mount(<Spinner />)
    })
})