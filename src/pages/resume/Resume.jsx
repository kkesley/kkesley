import React, { memo } from 'react'
import Helmet from 'react-helmet'

const ProjectList = () => {
  return (
    <div id="page__project-list">
        <Helmet>
            <title>Resume - Kendrick Kesley</title>
            <link rel="canonical" href="https://kkesley.com/resume" />
            <meta property="og:url" content="https://kkesley.com/resume"/>
            <meta name="description" content="Grab my latest resume." />
            <meta property="og:description" content="Grab my latest resume." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Resume - Kendrick Kesley" />
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
        </Helmet>
        
    </div>
  );
}

export default memo(ProjectList);
