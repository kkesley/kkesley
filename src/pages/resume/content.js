import ImageBinus from 'assets/university/binus-international.png'
import ImageRMIT from 'assets/university/rmit.jpg'

export default {
  personal_detail: {
    name: 'Kendrick Kesley',
    job_title: 'Software Developer',
    email: 'kendrick.kesley.dev@gmail.com',
    location: 'Melbourne, Australia',
  },
  careers: [
    {
      title: 'Consultant',
      company: 'Shine Solutions',
      year: '2019 - Current',
      contents: [
        'Redesigned part of a system for a client using React and AWS Amplify with 4 other team members.',
        'Extensive tests with Jest & Cypress.',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Psych Press',
      year: '2017 - 2019',
      contents: [
        'Developed back-end systems using "Serverless Architecture" using AWS, serverless framework, and multiple languages such as Golang and NodeJS.',
        'Applied DevOps methods to automating building and deploying process using AWS CodeBuild, AWS S3, and GIT for both for back-end and front-end.',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'ITEA Solution',
      year: '2016 - 2017',
      contents: [
        'Iteacup (made with AngularJS and PHP as the back-end). This project allows me to understand about stock management system and accounting system for businesses.',
        'Taxation system (made with AngularJS and Firebase as the database). This project allows me to understand about taxation process in Indonesia.',
      ],
    },
  ],
  projects: [
    {
      title: 'veronicaonggoro.com',
      year: '2020 (version 2)',
      contents: [
        'Repurposed old website (blogging) into a portfolio website (photography).',
        'Used AWS MediaConvert for encoding uploaded videos to HLS format to support multiple resolutions streaming in the web.',
        'Replaced REST API with GraphQL (using AppSync) to reduce the number of code that I have to maintain.',
        'Introduced a client portal for customers so the business process is streamlined (and to encourage customers to give feedback in the system).',
      ],
    },
    {
      title: 'veronicaonggoro.com',
      year: '2018 (version 1)',
      contents: [
        'Developed a personal email system using AWS SES and AWS S3.',
        'Created both back-end using "Serverless Architecture" with API Gateway, AWS Lambda, AWS S3, and AWS DynamoDB.',
        'Front-end created with ReactJS.',
        'Managed to run a scalable website with low monthly cost.',
      ],
    },
    {
      title: 'propertianda.com',
      year: '2016',
      contents: [
        'PropertiAnda is made with AngularJS and PHP as the back-end programming language. This project allows me to understand about crowdfunding and bidding/offering system.',
      ],
    },
    {
      title: 'gakushudo.com',
      year: '2016',
      contents: [
        'The website is made with AngularJS and PHP as the back-end programming language. This project allows me to understand the basic concept of E-commerce and ordering system.',
        'Gakushudo Learning Application (made with Ionic2 and PHP as the back-end programming language) This project allows me to understand how to run online classes complete with class schedules, online quizzes,and online absence system.',
      ],
    },
  ],
  skills: [
    {
      section: 'Technical',
      contents: [
        'Passed AWS Certified Solutions Architect – Associate certification & AWS Certified Developer - Associate (2019 - 2022)',
        'Designed Serverless Architecture to reduce cost and improve scalability using AWS ecosystem.',
        'Fluent in front-end development using ReactJS with Typescript.',
        'Fluent in back-end development using NodeJS (Typescript)',
        'Developed mobile applications (using React Native).',
        'Experienced in Golang with Serverless Framework',
        'Experienced in DynamoDB and MySQL.',
      ],
    },
    {
      section: 'Management & Teamwork',
      contents: [
        'Experienced in estimation and prioritisation sessions.',
        'Worked in a Scrum-based team (daily standups, sprint plannings, and retrospective sessions)',
        'Worked with non-developer teams e.g. designers and product owners.',
      ],
    },
  ],
  educations: [
    {
      university: 'RMIT University Australia (3.7 GPA)',
      year_completion: '2019',
      title: 'Master of Information Technology',
      image: ImageRMIT,
    },
    {
      university: 'BINUS International University (3.9 GPA)',
      year_completion: '2018',
      title: 'Bachelor of Computer Science',
      image: ImageBinus,
    },
    {
      university: 'RMIT University Australia (4.0 GPA)',
      year_completion: '2017',
      title: 'Bachelor of Information Technology',
      image: ImageRMIT,
    },
  ],
}
