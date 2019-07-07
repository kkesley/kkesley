import React, { memo } from 'react'
import Helmet from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import ReactMarkdown from 'react-markdown'

import Spinner from 'components/spinner'
import Banner from './Banner'

const showBlogQuery = loader('graphql/showBlog.graphql')
const BlogDetail = ({ match: { params: { blog } } }) => (
    <div id="page__blog-detail">
        <Helmet>
            <title>Blogs - Kendrick Kesley</title>
            <link rel="canonical" href={`https://kkesley.com/blogs/${blog}`} />
            <meta property="og:url" content={`https://kkesley.com/blogs/${blog}`}/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blogs - Kendrick Kesley" />
        </Helmet>
        <Query
            query={showBlogQuery} 
            variables={{ blog_id: blog }}
            notifyOnNetworkStatusChange
        >
            {({ loading, data, error }) => {
                if (loading) return <Spinner />
                if (error) return <p>{error.message}</p>
                if (!data) return null
                const { showBlog } = data
                if (!showBlog) return <p>Blog not found</p>
                const { blog_id, title, timestamp, content, tags } = showBlog
                return (
                    <React.Fragment>
                        <Helmet>
                            <title>{title} - Kendrick Kesley</title>
                            <meta name="description" content={title} />
                            <meta property="og:description" content={title} />
                        </Helmet>
                        <Banner blog={{ blog_id, title, timestamp }} />
                        <section id="section__content" className="section content markdown__content">
                            <div className="container">
                                <ReactMarkdown renderers={{
                                    link: props => {
                                        if (props.href.startsWith('http')) {
                                            return <a href={props.href} target="_blank" rel="nofollow noreferrer noopener">{props.children}</a>
                                        }
                                        return <Link to={props.href}>{props.children}</Link>
                                    }
                                }} source={content} />
                            </div>
                        </section>
                        <section id="section__tags" className="section">
                            <div className="container tags">
                                {
                                    tags.map(tag => <span key={`blog-tag-${tag}`} className="tag is-light">{tag}</span>)
                                }
                            </div>
                        </section>
                    </React.Fragment>
                )
            }}
        </Query>
    </div>
)

export default withRouter(memo(BlogDetail))