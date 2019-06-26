import React from 'react'
import { AUTH_TYPE } from 'aws-appsync';

describe('appsync config', () => {
    const OLD_ENV = process.env
    beforeEach(() => {
        jest.resetModules() // this is important - it clears the cache
        process.env = { ...OLD_ENV }
        delete process.env.NODE_ENV
    })
    afterEach(() => {
        process.env = OLD_ENV;
    })

    it('has valid config without env variable', () => {
        process.env.REACT_APP_STAGE = null
        const config = { ...require('../appsync').default }
        expect(config.graphqlEndpoint.length).toBeGreaterThan(0)
        expect(config.region.length).toBeGreaterThan(0)
        expect(config.authenticationType).toBe(AUTH_TYPE.API_KEY)
        expect(config.apiKey.length).toBeGreaterThan(0)
    })
    it('has different config for `development` and `production`', () => {
        process.env['REACT_APP_STAGE'] = 'development'
        const devConfig = { ...require('../appsync').default }
        jest.resetModules() // clear module cache
        process.env['REACT_APP_STAGE'] = 'production'
        const prodConfig = { ...require('../appsync').default }
        expect(devConfig.graphqlEndpoint).not.toBe(prodConfig.graphqlEndpoint)
        expect(devConfig.region).toBe(prodConfig.region)
        expect(devConfig.authenticationType).toBe(AUTH_TYPE.API_KEY)
        expect(prodConfig.authenticationType).toBe(AUTH_TYPE.API_KEY)
        expect(devConfig.apiKey).not.toBe(prodConfig.apiKey)
    })
})