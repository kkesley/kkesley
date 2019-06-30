import React, { memo } from 'react'
const Skill = ({ content: { skills } }) => (
    <section id="section__skill" className="section">
        <div className="container">
            <h1 className="title">
                Skills
            </h1>
            {
                skills.map(skill => (
                    <article key={`skill-${skill.section}`} className="media">
                        <div className="media-content">
                            <div className="content">
                                <h3>{skill.section}</h3>
                                <ul>
                                    {
                                        skill.contents.map((content, idx) => <li key={`skill-${skill.section}-content-${idx}`}>{content}</li>)
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

export default memo(Skill)