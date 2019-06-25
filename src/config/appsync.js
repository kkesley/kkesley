import { AUTH_TYPE } from 'aws-appsync';

let config
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // development app sync
    config = {
        graphqlEndpoint: 'https://e2a2i2y45vh3hfg3ouiquu3n44.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        region: 'ap-southeast-2',
        authenticationType: AUTH_TYPE.API_KEY,
        apiKey: 'da2-3gtqflodu5h45ljdef7uv23vhe'
    }
}else {
    // production app sync
    config = {
        graphqlEndpoint: 'https://avk5vzpxsnc65orpn5brsf6q3q.appsync-api.ap-southeast-2.amazonaws.com/graphql',
        region: 'ap-southeast-2',
        authenticationType: AUTH_TYPE.API_KEY,
        apiKey: 'da2-hd75vmcwrzbwdhu5xfgfkdia7e'
    }
}
export default config