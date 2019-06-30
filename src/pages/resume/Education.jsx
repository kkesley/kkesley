import React, { memo } from 'react'
const Education = ({ content: { educations } }) => (
    <section id="section__education" className="section">
        <div className="container">
            <h1 className="title">
                Education
            </h1>
            {
                educations.map(education => (
                    <article key={`education-${education.university}-${education.year_completion}`} className="media">
                        <figure className="media-left">
                            <p className="image is-64x64">
                                <img alt={education.university} src={education.image}/>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{education.university}</strong> - <small>{education.year_completion}</small>
                                    <br/>
                                    {education.title}
                                </p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

export default memo(Education)