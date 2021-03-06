import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import ImageBoard from 'assets/board.png'

import './Banner.scss'

const Banner = () => (
    <section id="section__banner" className="section hero is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-mobile is-vcentered">
                    <div className="column is-half-desktop is-full-mobile">
                        <div className="container">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    <li><Link to="/">home</Link></li>
                                    <li className="is-active"><Link to="/projects">projects</Link></li>
                                </ul>
                            </nav>
                            <h1 className="title">
                                Projects
                            </h1>
                            <h2 className="subtitle">
                                Commercial and personal projects throughout my journey.
                            </h2>
                        </div>
                    </div>
                    <div className="column is-half-desktop is-flex hero-image-container">
                        <img className="hero-image" alt="projects" src={ImageBoard} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Banner)