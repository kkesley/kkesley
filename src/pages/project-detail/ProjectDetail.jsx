import React, { memo } from 'react'
import Helmet from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import ReactMarkdown from 'react-markdown'

import Spinner from 'components/spinner'

import Banner from './Banner'

const showProjectQuery = loader('graphql/showProject.graphql')
const ProjectDetail = ({ match: { params: { project } } }) => (
    <div id="page__project-detail">
        <Helmet>
            <title>Projects - Kendrick Kesley</title>
            <link rel="canonical" href={`https://kkesley.com/projects/${project}`} />
            <meta property="og:url" content={`https://kkesley.com/projects/${project}`}/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Projects - Kendrick Kesley" />
        </Helmet>
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
                        <Helmet>
                            <title>{title} - Kendrick Kesley</title>
                            <meta name="description" content={title} />
                            <meta property="og:description" content={title} />
                            <meta property="og:image" content={poster_url} />
                        </Helmet>
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