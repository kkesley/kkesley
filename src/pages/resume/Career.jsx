import React, { memo } from 'react'
const Career = ({ content: { careers } }) => (
    <section id="section__career" className="section">
        <div className="container">
            <h1 className="title">
                Career
            </h1>
            {
                careers.map(career => (
                    <article key={`career-${career.title}-${career.company}-${career.year}`} className="media">
                        <div className="media-content">
                            <div className="content">
                                <h3>{career.title} | {career.company} | {career.year}</h3>
                                <ul>
                                    {
                                        career.contents.map((content, idx) => <li key={`career-${career.title}-${career.company}-${career.year}-content-${idx}`}>{content}</li>)
                                    }                                    
                                </ul>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

export default memo(Career)