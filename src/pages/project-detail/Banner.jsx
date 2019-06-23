import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './Banner.scss'
import ImageIteacloud from 'assets/projects/iteacloud.png'

const Banner = () => (
    <section id="section__banner" className="section hero is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-mobile is-multiline is-vcentered">
                    <div className="column is-half-desktop is-full-mobile">
                        <div className="container">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li className="is-active"><Link to="/projects/1">Iteacloud</Link></li>
                                </ul>
                            </nav>
                            <h1 className="title">
                                Iteacloud
                            </h1>
                            <h2 className="subtitle">
                                2018 - 2019
                            </h2>
                        </div>
                    </div>
                    <div className="column is-half-desktop is-flex hero-image-container">
                        <img className="hero-image" alt="iteacloud" src={ImageIteacloud} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Banner)