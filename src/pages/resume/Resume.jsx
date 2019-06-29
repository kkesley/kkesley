import React, { memo } from 'react'
import Helmet from 'react-helmet'

import Banner from './Banner'
import Career from './Career'
import Project from './Project'
import Skill from './Skill'
import Education from './Education'


const Resume = () => {
  return (
    <div id="page__project-list">
        <Helmet>
            <title>Résumé - Kendrick Kesley</title>
            <link rel="canonical" href="https://kkesley.com/resume" />
            <meta property="og:url" content="https://kkesley.com/resume"/>
            <meta name="description" content="Grab my latest résumé." />
            <meta property="og:description" content="Grab my latest résumé." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Résumé - Kendrick Kesley" />
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
        </Helmet>
        <Banner />
        <Career />
        <Project />
        <Skill />
        <Education />
    </div>
  );
}

export default memo(Resume);
