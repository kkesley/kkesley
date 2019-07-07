import React, { memo } from 'react'
import Helmet from 'react-helmet'
import Banner from './Banner'
import Blog from './Blog'

const ProjectList = () => {
  return (
    <div id="page__blog-list">
        <Helmet>
            <title>Blogs - Kendrick Kesley</title>
            <link rel="canonical" href="https://kkesley.com/blogs" />
            <meta property="og:url" content="https://kkesley.com/blogs"/>
            <meta name="description" content="Collection of my opinions and thoughts." />
            <meta property="og:description" content="Collection of my opinions and thoughts." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blogs - Kendrick Kesley" />
            <meta property="og:image" content="https://avatars3.githubusercontent.com/u/14907878?s=40&v=4" />
        </Helmet>
        <Banner />
        <div className="container"><hr /></div>
        <Blog />
    </div>
  );
}

export default memo(ProjectList);
