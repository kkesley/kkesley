import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ downloadResume, content: { personal_detail } }) => (
    <section id="section__banner" className="section hero is-bold">
        <div className="hero-body">
            <div className="container">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li className="is-active"><Link to="/resume">résumé</Link></li>
                    </ul>
                </nav>
                <h1 className="title">
                    {personal_detail.name} <button onClick={() => downloadResume()} className="button is-info">Download Résumé</button>
                </h1>
                <h2 className="subtitle">
                    {personal_detail.job_title}
                </h2>
                <h3>
                    <div>
                        <span className="icon"><i className="fas fa-at"></i></span>
                        <a href={`mailto:${personal_detail.email}`}>{personal_detail.email}</a>
                    </div>
                    <div>
                        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                        {personal_detail.location}
                    </div>
                </h3>
            </div>
        </div>
    </section>
)

export default memo(Banner)