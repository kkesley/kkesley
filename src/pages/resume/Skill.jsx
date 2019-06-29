import React, { memo } from 'react'
const Banner = () => (
    <section id="section__education" className="section">
        <div className="container">
            <h1 className="title">
                Skills
            </h1>
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <h3>Technical</h3>
                        <ul>
                            <li>Passed AWS Certified Solutions Architect – Associate certification (2019 - 2021)</li>
                            <li>Designed Serverless Architecture to reduce cost and improve scalability using AWS ecosystem.</li>
                            <li>Developed websites and mobile applications as a full-stack development.</li>
                            <li>Fluent in front-end development using ReactJS / AngularJS.</li>
                            <li>Fluent in back-end development using PHP, NodeJS, and Golang.</li>
                            <li>Experienced in DynamoDB, MySQL, MSSQL, PostgreSQL, and MongoDB.</li>
                            <li>Programmed using MVC Frameworks e.g. Laravel, .NET CORE, Ruby on Rails, and Spring.</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <h3>Management</h3>
                        <ul>
                            <li>Managed time proportionally between work and study.</li>
                            <li>Handled tight deadlines.</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <h3>Teamwork</h3>
                        <ul>
                            <li>Worked with non-developer teams e.g. designers and business planners.</li>
                            <li>Worked with developer teams.</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
)

export default memo(Banner)