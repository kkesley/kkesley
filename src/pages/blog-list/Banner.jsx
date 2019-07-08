import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import ImageTOA from 'assets/toa.png'

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
                                    <li className="is-active"><Link to="/blogs">blogs</Link></li>
                                </ul>
                            </nav>
                            <h1 className="title">
                                Blogs
                            </h1>
                            <h2 className="subtitle">
                                Collection of my opinions and thoughts.
                            </h2>
                        </div>
                    </div>
                    <div className="column is-half-desktop is-flex hero-image-container">
                        <img className="hero-image" alt="projects" src={ImageTOA} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Banner)