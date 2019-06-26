import React, { memo } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import ReactMarkdown from 'react-markdown'

import Spinner from 'components/spinner'

import Banner from './Banner'

const showProjectQuery = loader('graphql/showProject.graphql')
const ProjectDetail = ({ match: { params: { project } } }) => (
    <div id="page__project-detail">
        <Query
            query={showProjectQuery} 
            variables={{ project_id: project }}
            notifyOnNetworkStatusChange={true}
        >
            {({ loading, data, error }) => {
                if (loading) return <Spinner />
                if (error) return <p>{error.message}</p>
                if (!data) return null
                const { showProject } = data
                if (!showProject) return <p>Project not found</p>
                const { title, year, poster_url, content } = showProject
                return (
                    <React.Fragment>
                        <Banner project={{ title, year, poster_url }} />
                        <div className="container">
                            <hr />
                        </div>
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
                    </React.Fragment>
                )
            }}
        </Query>
    </div>
)

export default withRouter(memo(ProjectDetail))