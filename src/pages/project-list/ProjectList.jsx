import React, { memo } from 'react'
import Banner from './Banner'
import Project from './Project'

const ProjectList = () => {
  return (
    <div id="page__project-list">
        <Banner />
        <div className="container"><hr /></div>
        <Project />
    </div>
  );
}

export default memo(ProjectList);
