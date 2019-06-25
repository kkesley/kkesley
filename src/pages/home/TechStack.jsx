import React, { memo } from 'react'

import './TechStack.scss'
import ImageReact from 'assets/tech/react.png'
import ImageExpo from 'assets/tech/expo.png'
import ImageS3 from 'assets/tech/s3.png'
import ImageCloudfront from 'assets/tech/cloudfront.png'
import ImageGolang from 'assets/tech/golang.png'
import ImageNodeJS from 'assets/tech/nodejs.png'
import ImageDynamoDB from 'assets/tech/dynamodb.png'
import ImageElasticSearch from 'assets/tech/elasticsearch.png'
import ImageLambda from 'assets/tech/lambda.png'
import ImageAWS from 'assets/tech/aws.png'
import ImageServerless from 'assets/tech/serverless.png'

const Row = ({ title, children, images }) => (
    <div className="columns">
        <div className="column is-3">
            <p className="title is-4">{title}</p>
        </div>
        <div className="column is-4 is-offset-1">
            <p className="is-size-5 has-text-grey-light has-text-weight-semibold">{children}</p>
        </div>
        <div className="column is-3 is-offset-1">
            {images.map(image => <img key={`tech-${image.alt}`} alt={image.alt} title={image.alt} src={image.src} role="presentation" />)}
        </div>
    </div>
)

const TechStack = () => (
    <section id="section__tech-stack" className="section section__tech-stack bg-darker">
        <div className="container">
            <h2 className="title is-2">Favourite Tech Stack</h2>
            <p className="subtitle" style={{ marginBottom: '5em' }}>Subject to change!</p>
            <Row title="Mobile Application" images={[{ src: ImageReact, alt: 'React Native' }, { src: ImageExpo, alt: 'Expo' }]}>
                Develop using React Native and Expo. Not an expert, but I really enjoy developing using both technologies!
            </Row>
            <Row title="Web Front-End" images={[{ src: ImageReact, alt: 'React Native' }, { src: ImageS3, alt: 'AWS S3' }, { src: ImageCloudfront, alt: 'AWS Cloudfront' }]}>
                Develop using ReactJS, deploy to AWS S3, and serve it using Cloudfront. Always trying to find excuses to use Lottie!
            </Row>
            <Row title="Back-End" images={[{ src: ImageGolang, alt: 'Golang' }, { src: ImageNodeJS, alt: 'Node JS' }, { src: ImageLambda, alt: 'AWS Lambda' }, { src: ImageDynamoDB, alt: 'AWS DynamoDB' }, { src: ImageElasticSearch, alt: 'ElasticSearch' }]}>
                Develop API using Go / nodeJS and deploy to AWS Lambda. DynamoDB is great for database requirements and you can sync your data to ElasticSearch using DynamoDB Streams!
            </Row>
            <Row title="Architecture" images={[{ src: ImageAWS, alt: 'Amazon Web Services' }, { src: ImageServerless, alt: 'Serverless Framework' }]}>
                AWS, AWS, AWS! Orchestrate AWS products to achieve business requirements, especially using serverless design patterns. I'm currently using Serverless Framework to orchestrate serverless architectures.
            </Row>
            {/* <p className="subtitle" style={{ marginTop: '5em' }}>Curious about my previous tech stacks? <a href="asd" className="has-text-link">Check it out!</a></p> */}
        </div>
    </section>
)

export default memo(TechStack)