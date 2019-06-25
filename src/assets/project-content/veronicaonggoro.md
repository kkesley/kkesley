## Project Background
This is a personal project which is also my first serverless project. The project is a blogging website with an admin system to add new contents to the website. The system can also receive emails which comes from SES, and displays them in the admin system.

## Tech Stack
#### Front-End
Both the website and the admin system is made using ReactJS (with Redux). I experimented a lot on project structures and WYSIWYG editor using [ContentTools](http://getcontenttools.com/). After a while, I decided to play around with GraphQL (using AppSync) as well. I haven't finished the new version using GraphQL, but it's definitely coming!
#### Back-End
I used NodeJS with Express framework which for the back-end. It's deployed to AWS lambda using ClaudiaJS to manage the function. The system use DynamoDB as the primary database. For email purposes, I used SES for sending and receiving emails. Incoming emails are saved in S3 and parsed by a Lambda function, which finally stored in DynamoDB. I also tried to optimize uploaded assets by restricting file sizes (which then leads to usability issues).
#### Other
I used CodeBuild for building APIs and React application.

## Key Learnings
This project allows me to reinforce my knowledge about ReactJS and Redux, especially deploying these types of applications to S3. It also reinforced my skills for NodeJS as I experimented a lot about optimizing images, and how to develop them in Lambda. I also learned about Lambda limitations as I met a roadblock where Lambda couldn't accept large files.

Some other things which I learned:

    - Transcoding videos using AWS Elastic Transcoder to produce different formats of videos.
    - SES incoming email events, and how to process those emails for the application.

## Misc. Info
    - project type: personal
    - number of developer: 1
    - system type: website
    - developed in: Melbourne, Australia