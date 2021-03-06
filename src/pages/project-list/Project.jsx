import React, { memo } from 'react'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import ProjectItem from 'components/project-item'

import Spinner from 'components/spinner'

const listProjectsQuery = loader('graphql/listProjects.graphql')

const Project = () => (
    <section id="section__tech-stack" className="section">
        <div className="container">
            <Query
                query={listProjectsQuery} 
                variables={{ next_token: null }}
                notifyOnNetworkStatusChange={true}
            >
                {({ loading, data, error, fetchMore }) => {
                    if (error) return <p>{error.message}</p>
                    if (!data || !data.listProjects) {
                        if (loading) return <Spinner />
                        return null
                    }
                    const { listProjects } = data
                    const { items, next_token } = listProjects
                    if (loading && (items || []).length === 0) return <Spinner />
                    
                    if ((items || []).length === 0) return <p>No projects</p>
                    return (
                        <React.Fragment>
                            <div className="columns is-multiline">
                                {
                                    items.map(project => (
                                        <div key={`project-in-home-${project.project_id}`} className="column is-half">
                                            <ProjectItem project={project} />
                                        </div>
                                    ))
                                }
                            </div>
                            {next_token && next_token.length > 0 && (
                                <div className="container has-text-centered">
                                    <hr />
                                    <button
                                        id="load-more"
                                        className={`button is-info ${loading ? 'is-loading' : ''}`}
                                        onClick={() => {
                                            console.log(next_token)
                                            fetchMore({
                                                query: listProjectsQuery,
                                                variables: { next_token },
                                                updateQuery: (previousResult, { fetchMoreResult }) => {
                                                    const previousEntry = previousResult.listProjects;
                                                    const newProjects = fetchMoreResult.listProjects.items;
                                                    const newNextToken = fetchMoreResult.listProjects.next_token;
                                        
                                                    return {
                                                        listProjects: {
                                                            items: [...previousEntry.items, ...newProjects],
                                                            next_token: newNextToken,
                                                            __typename: previousEntry.__typename
                                                        }
                                                    }  
                                                }
                                            })  
                                        }}>
                                        Load more projects
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

export default memo(Project)