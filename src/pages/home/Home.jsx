import React, { memo } from 'react'

import Banner from './Banner'
import Service from './Service'
import Project from './Project'

const Home = () => {
  return (
    <React.Fragment id="page__home">
      <Banner />
      <Service />
      <Project />
    </React.Fragment>
  );
}

export default memo(Home);
