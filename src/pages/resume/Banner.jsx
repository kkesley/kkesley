import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => (
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
                    Kendrick Kesley
                </h1>
                <h2 className="subtitle">
                    Software Developer
                </h2>
                <h3>
                    <span className="icon"><i className="fas fa-envelope"></i></span>
                    <a href="mailto:kendrick.kesley.dev@gmail.com">kendrick.kesley.dev@gmail.com</a>
                </h3>
            </div>
        </div>
    </section>
)

export default memo(Banner)