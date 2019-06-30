import ImageBinus from 'assets/university/binus-international.png'
import ImageRMIT from 'assets/university/rmit.jpg'

export default {
    personal_detail: {
      name: 'Kendrick Kesley',
      job_title: 'Software Developer',
      email: 'kendrick.kesley.dev@gmail.com',
      location: 'Melbourne, Australia',
    },
    careers: [{
      title: 'Full-Stack Developer',
      company: 'Psych Press',
      year: '2017 - Current',
      contents: [
        'Developed back-end systems using "Serverless Architecture" using AWS, serverless framework, and multiplelanguages such as Golang and NodeJS.',
        'Applied DevOps methods to automating building and deploying process using AWS CodeBuild, AWS S3, andGIT for both for back-end and front-end.'
      ],
    }, {
      title: 'Full-Stack Developer',
      company: 'ITEA Solution',
      year: '2016 - 2017',
      contents: [
        'Iteacup (made with AngularJS and PHP as the back-end). This project allows me to understand about stock management system and accounting system for businesses. This project has sensitive information so only authorized user can login.',
        'Taxation system (made with AngularJS and Firebase as the database). This project allows me to understand about taxation process in Indonesia, how to automatically fill pdf forms by using PDFtk library, and how to deal with asynchronous requests.'
      ],
    }],
    projects: [{
      title: 'veronicaonggoro.com',
      year: '2018',
      contents: [
        'Developed a personal email system using AWS SES and AWS S3.',
        'Created both back-end and front-end using "Serverless Architecture" with AWS Lambda, AWS S3, and AWS DynamoDB.',
        'Front-end created with ReactJS.',
        'Managed to run a scalable website with low monthly cost.',
        'Applied optimization using GZip, browser caching, minification, and CDN'
      ],
    }, {
      title: 'propertianda.com',
      year: '2016',
      contents: [
        'PropertiAnda is made with AngularJS and PHP as the back-end programming language. This project allows me to understand about crowdfunding and bidding/offering system.',
        'One of the largest systems I have built.',
      ],
    }, {
      title: 'gakushudo.com',
      year: '2016',
      contents: [
        'The website is made with AngularJS and PHP as the back-end programming language. This project allows me to understand the basic concept of E-commerce and ordering system.',
        'Gakushudo Learning Application (made with Ionic2 and PHP as the back-end programming language) This project allows me to understand how to run online classes complete with class schedules, online quizzes,and online absence system.',
      ],
    }],
    skills: [{
        section: 'Technical',
        contents: [
            'Passed AWS Certified Solutions Architect – Associate certification (2019 - 2021)',
            'Designed Serverless Architecture to reduce cost and improve scalability using AWS ecosystem.',
            'Developed websites and mobile applications as a full-stack development.',
            'Fluent in front-end development using ReactJS / AngularJS.',
            'Fluent in back-end development using PHP, NodeJS, and Golang.',
            'Experienced in DynamoDB, MySQL, MSSQL, PostgreSQL, and MongoDB.',
            'Programmed using MVC Frameworks e.g. Laravel, .NET CORE, Ruby on Rails, and Spring.',
        ],
    }, {
        section: 'Management',
        contents: [
            'Managed time proportionally between work and study.',
            'Handled tight deadlines.',
        ],
    }, {
        section: 'Teamwork',
        contents: [
            'Worked with non-developer teams e.g. designers and business planners.',
            'Worked with developer teams.',
        ],
    }],
    educations: [{
        university: 'RMIT University Australia',
        year_completion: '2019',
        title: 'Master of Information Technology',
        image: ImageRMIT,
    }, {
        university: 'BINUS International University',
        year_completion: '2018',
        title: 'Bachelor of Computer Science',
        image: ImageBinus,
    }, {
        university: 'RMIT University Australia',
        year_completion: '2017',
        title: 'Bachelor of Information Technology',
        image: ImageRMIT,
    }]
}