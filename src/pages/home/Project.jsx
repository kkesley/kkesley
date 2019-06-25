import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import ProjectItem from 'components/project-item'

import Spinner from 'components/spinner'

const listProjectsQuery = loader('graphql/listProjectsInHome.graphql')

const Project = () => (
    <section id="section__tech-stack" className="section">
        <div className="container">
            <h2 className="title is-2">Projects</h2>
            <p className="subtitle">Commercial and personal projects throughout my journey.</p>
            <Query
                query={listProjectsQuery} 
                notifyOnNetworkStatusChange={true}
            >
                {({ loading, data: { listProjectsInHome }, error }) => {
                    if (loading) return <Spinner />
                    if (error) return <p>{error.message}</p>
                    const { items } = listProjectsInHome
                    if ((items || []).length === 0) return <p>No projects</p>
                    return (
                        <div className="columns is-multiline">
                            {
                                items.map(project => (
                                    <div key={`project-in-home-${project.project_id}`} className="column is-half">
                                        <ProjectItem project={project} />
                                    </div>
                                ))
                            }
                        </div>
                        
                    )
                }}
            </Query>
            <p className="subtitle">Want to see more? <Link to="/projects" className="has-text-link">Click me!</Link></p>
        </div>
    </section>
)

export default memo(Project)