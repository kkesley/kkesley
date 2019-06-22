import React, { memo } from 'react'

import './Footer.scss'

import ImageMadeWithBulma from 'assets/made-with-bulma.png'

const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <a href="https://bulma.io"><img className="badge" src={ImageMadeWithBulma} alt="Made With Bulma" /></a>
        </div>
    </footer>
)

export default memo(Footer)