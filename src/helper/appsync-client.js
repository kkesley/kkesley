import AWSAppSyncClient from 'aws-appsync'

import config from 'config/appsync'

export default new AWSAppSyncClient({
    url: config.graphqlEndpoint,
    region: config.region,
    auth: {
        type: config.authenticationType,
        apiKey: config.apiKey,
    }
})