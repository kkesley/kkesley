## Project Background
This project is an initiative to create a scalable system where the owner can expand their system to other industries. This is one of my most successful projects in using serverless architecture. I developed independent systems which can interact with other independent systems to achieve its business goals. I successfully integrated the system to [another project](/projects/edvise) without any major changes to Iteacloud itself. Unfortunately, this project is discontinued.

## Tech Stack
#### Front-End
The application is made using ReactJS with Redux. It's deployed to S3 and can be accessed through Cloudfront. It also interacts with AWS services such as S3 for uploading files (to avoid using Lambda as it has some limitations for large files) by using Cognito developer authenticated identities.

#### Back-End
The back-end system is developed using Go and deployed to Lambda using Serverless Framework. The sytem uses DynamoDB as its primary databases which is synced with Elasticsearch for searching and reading purposes. We also used other services such as SNS for publishing events (for billing purposes), SQS for scheduling mobile notifications, and Kinesis Firehose for aggregating events.

## Key Learning
I learned a lot about AWS services as I can freely choose the technologies for the system. The system gone through a couple of revisions from removing Lambda from VPC to using Elasticsearch for reading data. This is also my first commercial experience using Elasticsearch.

## Misc. Info
    - project type: commercial
    - number of developer: 1
    - system type: website
    - developed in: Melbourne, Australia