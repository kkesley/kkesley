import React, { memo } from 'react'

const Navigation = () => (
    <section id="section__nav" className="hero">
        <div className="hero-header">
            <nav className="navbar is-transparent">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-burger burger" data-target="navbar-main">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbar-main" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item" href="https://bulma.io/">
                    Home
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                    Portfolio
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                    Blogs
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                    Resume
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </div>
    </section>
)

export default memo(Navigation)