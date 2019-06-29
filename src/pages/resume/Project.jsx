import React, { memo } from 'react'
const Project = () => (
    <section id="section__project" className="section">
        <div className="container">
            <h1 className="title">
                Side Projects
            </h1>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3>veronicaonggoro.com | 2018</h3>
                        <ul>
                            <li>Developed a personal email system using AWS SES and AWS S3.</li>
                            <li>Created both back-end and front-end using "Serverless Architecture" with AWS Lambda, AWS S3, and AWSDynamoDB.</li>
                            <li>Front-end created with ReactJS.</li>
                            <li>Managed to run a scalable website with low monthly cost.</li>
                            <li>Applied optimization using GZip, browser caching, minification, and CDN</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3>propertianda.com | 2016</h3>
                        <ul>
                            <li>PropertiAnda is made with AngularJS and PHP as the back-end programming language. This project allows me to understand about crowdfunding and bidding/offering system.</li>
                            <li>One of the largest systems I have built.</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <h3>gakushudo.com | 2016</h3>
                        <ul>
                            <li>The website is made with AngularJS and PHP as the back-end programming language. This project allows me to understand the basic concept of E-commerce and ordering system.</li>
                            <li>Gakushudo Learning Application (made with Ionic2 and PHP as the back-end programming language) This project allows me to understand how to run online classes complete with class schedules, online quizzes,and online absence system.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
)

export default memo(Project)