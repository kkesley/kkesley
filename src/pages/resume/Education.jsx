import React, { memo } from 'react'
const Banner = () => (
    <section id="section__education" className="section">
        <div className="container">
            <h1 className="title">
                Education
            </h1>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>RMIT University</strong> - <small>2019</small>
                            <br/>
                            Master of Information Technology
                        </p>
                    </div>
                </div>
            </article>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>BINUS International University</strong> - <small>2018</small>
                            <br/>
                            Bachelor of Computer Science
                        </p>
                    </div>
                </div>
            </article>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>RMIT University</strong> - <small>2017</small>
                            <br/>
                            Bachelor of Information Technology
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
)

export default memo(Banner)