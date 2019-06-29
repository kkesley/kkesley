import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'

const Navigation = () => {
    const [ isNavActive, setIsNavActive ] = useState(false)

    const CustomNavLink = ({ exact, to, children }) => <NavLink className="navbar-item" activeClassName="is-active" exact={exact} to={to} onClick={() => setIsNavActive(false)}>{children}</NavLink>

    return (
        <section id="section__nav" className="hero">
            <div className="hero-header">
                <nav className="navbar is-transparent">
                    <div className="container">
                        <div className="navbar-brand">
                            <div onClick={() => setIsNavActive(!isNavActive)} className="navbar-burger burger" data-target="navbar-main">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
    
                        <div id="navbar-main" className={`navbar-menu ${isNavActive ? 'is-active' : ''}`}>
                            <div className="navbar-end">
                                <CustomNavLink exact to="/">Home</CustomNavLink>
                                <CustomNavLink to="/projects">Projects</CustomNavLink>
                                <CustomNavLink to="/resume">Résumé</CustomNavLink>
                                {/* <Link className="navbar-item" to="/blogs">Blogs</Link> */}
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
}

export default memo(Navigation)