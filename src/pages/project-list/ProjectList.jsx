import React, { memo } from 'react'
import Helmet from 'react-helmet'
import Banner from './Banner'
import Project from './Project'

const ProjectList = () => {
  return (
    <div id="page__project-list">
        <Helmet>
            <title>Projects - Kendrick Kesley</title>
            <link rel="canonical" href="https://kkesley.com/projects" />
            <meta property="og:url" content="https://kkesley.com/projects"/>
            <meta name="description" content="These are commercial and personal projects throughout my journey." />
            <meta property="og:description" content="These are commercial and personal projects throughout my journey." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Projects - Kendrick Kesley" />
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
        </Helmet>
        <Banner />
        <div className="container"><hr /></div>
        <Project />
    </div>
  );
}

export default memo(ProjectList);
