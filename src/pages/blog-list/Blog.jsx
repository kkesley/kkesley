import React, { memo } from 'react'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import BlogItem from 'components/blog-item'

import Spinner from 'components/spinner'

import './Blog.scss' 

const listBlogsQuery = loader('graphql/listBlogs.graphql')

const Blog = () => (
    <section id="section__blog-list" className="section">
        <div className="container">
            <Query
                query={listBlogsQuery} 
                variables={{ next_token: null }}
                notifyOnNetworkStatusChange
            >
                {({ loading, data, error, fetchMore }) => {
                    console.log(data)
                    if (error) return <p>{error.message}</p>
                    if (!data || !data.listBlogs) {
                        if (loading) return <Spinner />
                        return null
                    }
                    const { listBlogs } = data
                    const { items, next_token } = listBlogs
                    if (loading && (items || []).length === 0) return <Spinner />
                    
                    if ((items || []).length === 0) return <p>No blogs</p>
                    return (
                        <React.Fragment>
                            {
                                items.map(blog => (
                                    <div className="blog-item" key={`blog-in-home-${blog.blog_id}`}>
                                        <BlogItem blog={blog} />
                                    </div>
                                ))
                            }
                            {next_token && next_token.length > 0 && (
                                <div className="container has-text-centered">
                                    <hr />
                                    <button
                                        id="load-more"
                                        className={`button is-info ${loading ? 'is-loading' : ''}`}
                                        onClick={() => {
                                            fetchMore({
                                                query: listBlogsQuery,
                                                variables: { next_token },
                                                updateQuery: (previousResult, { fetchMoreResult }) => {
                                                    const previousEntry = previousResult.listBlogs
                                                    const newBlogs = fetchMoreResult.listBlogs.items
                                                    const newNextToken = fetchMoreResult.listBlogs.next_token
                                        
                                                    return {
                                                        listBlogs: {
                                                            items: [...previousEntry.items, ...newBlogs],
                                                            next_token: newNextToken,
                                                            __typename: previousEntry.__typename
                                                        }
                                                    }  
                                                }
                                            })  
                                        }}>
                                        Load more blogs
                                    </button>
                                </div>
                            )}
                        </React.Fragment>
                    )
                }}
            </Query>
        </div>
    </section>
)

export default memo(Blog)