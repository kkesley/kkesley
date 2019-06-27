[![Build Status](https://api.travis-ci.com/kkesley/kkesley.png?branch=master)](https://travis-ci.org/kkesley/kkesley)

If you wish to see the API's documentation. [Go here](https://github.com/kkesley/kkesley-api)

## Why [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

This project allows me to archive my previous projects, thoughts, and choices. I tend to forget how fragile I am as a human being. How I made choices which I deem ridiculous at the present but was considered best before (how/when/why did I change?). I'm pretty sure I'll change again in the future, and I will embrace that. Thus, I want to document myself here (only stuffs related to programming though).

Besides, lots of people are having personal sites these days...

## Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a simple website built on [ReactJS](https://reactjs.org/) w/ [Apollo](https://github.com/apollographql/react-apollo). The website will communicate with AWS Appsync which holds some dynamic data (such as projects).

### Pages

Currently, there are only 3 pages in my website

1. Home
2. Project List
3. Project Detail

Most of the content is static, except projects which are coming from AWS DynamoDB.

Images are optimized using [Squoosh](https://squoosh.app/).

### Testing

Tested with Jest. Can be seen in `__tests__` folder in each component / page.

You can run the tests using `yarn test` or `yarn test:coverage` for coverage testing.

### Deploying

The website is deployed to S3, which covered by AWS Cloudfront.

I used [Serverless Framework](https://serverless.com/) to orchestrate the resources (S3, Cloudfront, and Route53 record set). You can see the configuration in `__infrastructure/serverless.yml`.

You can build using `yarn build:dev` (for development env) or `yarn build:prod` (for production env).