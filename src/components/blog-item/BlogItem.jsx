import React, { memo } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => blog && (
    <div className="content is-medium">
        <h4 className="title is-2"><Link to={`/blogs/${blog.blog_id}`}>{blog.title}</Link></h4>
        <p className="subtitle">{dayjs(blog.timestamp, 'YYYYMMDD').format('DD MMM YYYY')}</p>
        <div className="tags">
            {
                blog.tags.map(tag => <span key={`blog-tag-${blog.blog_id}-${tag}`} className="tag is-light">{tag}</span>)
            }
        </div>
    </div>
)

export default memo(BlogItem)