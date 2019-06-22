import React, { memo } from 'react'

import './Home.scss'

import Banner from './Banner'
import Service from './Service'
import Project from './Project'
import TechStack from './TechStack'
import Certification from './Certification'

const Home = () => {
  return (
    <React.Fragment id="page__home">
      <Banner />
      <Service />
      <Project />
      <TechStack />
      <Certification />
    </React.Fragment>
  );
}

export default memo(Home);
