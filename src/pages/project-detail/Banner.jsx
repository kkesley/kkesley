import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './Banner.scss'

const Banner = ({ project }) => project && (
    <section id="section__banner" className="section hero is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-mobile is-multiline is-vcentered">
                    <div className="column is-half-desktop is-full-mobile">
                        <div className="container">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    <li><Link to="/">home</Link></li>
                                    <li><Link to="/projects">projects</Link></li>
                                    <li className="is-active"><Link to={`/projects/${project.project_id}`}>{project.title}</Link></li>
                                </ul>
                            </nav>
                            <h1 className="title">
                                {project.title}
                            </h1>
                            <h2 className="subtitle">
                                {project.year}
                            </h2>
                        </div>
                    </div>
                    <div className="column is-half-desktop is-flex hero-image-container">
                        <figure className="image">
                            <img className="hero-image" alt={project.title} src={project.poster_url} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Banner)