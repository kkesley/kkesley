import React, { memo } from 'react'
import Helmet from 'react-helmet'

import './Home.scss'

import Banner from './Banner'
import Service from './Service'
import Project from './Project'
import TechStack from './TechStack'
import Certification from './Certification'

const Home = () => {
  return (
    <div id="page__home">
      <Helmet>
          <title>Kendrick Kesley</title>
          <link rel="canonical" href="https://kkesley.com" />
          <meta property="og:url" content="https://kkesley.com"/>
          <meta name="description" content="My name is Kendrick Kesley and I'm a developer" />
          <meta property="og:description" content="My name is Kendrick Kesley and I'm a developer" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kendrick Kesley" />
          <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
      </Helmet>
      <Banner />
      <Service />
      <Project />
      <TechStack />
      <Certification />
    </div>
  );
}

export default memo(Home);
