import React, { memo } from 'react'
const Project = ({ content: { projects } }) => (
    <section id="section__project" className="section">
        <div className="container">
            <h1 className="title">
                Projects
            </h1>
            {
                projects.map(project => (
                    <article key={`project-${project.title}-${project.year}`} className="media">
                        <div className="media-content">
                            <div className="content">
                                <h3>{project.title} | {project.year}</h3>
                                <ul>
                                    {
                                        project.contents.map((content, idx) => <li key={`project-${project.title}-${project.year}-content-${idx}`}>{content}</li>)
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

export default memo(Project)