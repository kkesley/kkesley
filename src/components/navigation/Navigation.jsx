import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'

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
                        <NavLink className="navbar-item" exact activeClassName="is-active" to="/">Home</NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/projects">Projects</NavLink>
                        {/* <Link className="navbar-item" to="/blogs">Blogs</Link> */}
                        {/* <Link className="navbar-item" to="/resume">Resume</Link> */}
                        <a className="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/kkesley" target="_blank" rel="noopener noreferrer">
                            <span className="icon"><i className="fab fa-github"/></span>
                        </a>
                        <a className="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://www.linkedin.com/in/kendrick-kesley" target="_blank" rel="noopener noreferrer">
                            <span className="icon"><i className="fab fa-linkedin" /></span>
                        </a>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    </section>
)

export default memo(Navigation)