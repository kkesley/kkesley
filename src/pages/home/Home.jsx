import React, { memo } from 'react'

import Banner from './Banner'
import Service from './Service'
import Stack from './Stack'

const Home = () => {
  return (
    <React.Fragment id="page__home">
      <Banner />
      <Service />
      <Stack />
    </React.Fragment>
  );
}

export default memo(Home);
