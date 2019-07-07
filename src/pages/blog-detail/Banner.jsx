import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const Banner = ({ blog }) => blog && (
    <section id="section__banner" className="section hero is-bold">
        <div className="hero-body is-paddingless">
            <div className="container">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/blogs">blogs</Link></li>
                        <li className="is-active"><Link to={`/blogs/${blog.blog_id}`}>{blog.title}</Link></li>
                    </ul>
                </nav>
                <h1 className="title">
                    {blog.title}
                </h1>
                <h2 className="subtitle">
                    {dayjs(blog.timestamp, 'YYYYMMDD').format('DD MMM YYYY')}
                </h2>
            </div>
        </div>
    </section>
)

export default memo(Banner)