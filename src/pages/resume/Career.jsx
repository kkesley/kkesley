import React, { memo } from 'react'
const Career = () => (
    <section id="section__career" className="section">
        <div className="container">
            <h1 className="title">
                Career
            </h1>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3>Full-Stack Developer | Psych Press | 2017 - Current</h3>
                        <ul>
                            <li>Developed back-end systems using "Serverless Architecture" using AWS, serverless framework, and multiplelanguages such as Golang and NodeJS.</li>
                            <li>Applied DevOps methods to automating building and deploying process using AWS CodeBuild, AWS S3, andGIT for both for back-end and front-end.</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3>Full-Stack Developer | ITEA Solution | 2016 - 2017</h3>
                        <ul>
                            <li>Iteacup (made with AngularJS and PHP as the back-end). This project allows me to understand about stock management system and accounting system for businesses. This project has sensitive information so only authorized user can login.</li>
                            <li>Taxation system (made with AngularJS and Firebase as the database). This project allows me to understand about taxation process in Indonesia, how to automatically fill pdf forms by using PDFtk library, and how to deal with asynchronous requests.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
)

export default memo(Career)