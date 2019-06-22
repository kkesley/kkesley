import React, { memo } from 'react'
import BannerImage from 'assets/developer.jpg'

import './Banner.scss'

const Banner = () => (
    <section id="section__banner" className="hero is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
                <div class="columns is-mobile is-vcentered">
                    <div class="column is-half-desktop is-full-mobile">
                        <div className="container">
                            <h1 className="title is-1">
                                Kendrick Kesley
                            </h1>
                            <h2 className="subtitle">
                                is a Developer
                            </h2>
                        </div>
                    </div>
                    <div class="column is-half-desktop is-flex hero-image-container">
                        <img className="hero-image" src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Banner)