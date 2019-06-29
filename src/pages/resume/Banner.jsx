import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Banner = ({ downloadResume }) => (
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
                    Kendrick Kesley <button onClick={() => downloadResume()} className="button is-info">Download Résumé</button>
                </h1>
                <h2 className="subtitle">
                    Software Developer
                </h2>
                <h3>
                    <div>
                        <span className="icon"><i className="fas fa-at"></i></span>
                        <a href="mailto:kendrick.kesley.dev@gmail.com">kendrick.kesley.dev@gmail.com</a>
                    </div>
                    <div>
                        <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                        Melbourne, Australia
                    </div>
                </h3>
            </div>
        </div>
    </section>
)

export default memo(Banner)