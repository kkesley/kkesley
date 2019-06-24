import React, { memo } from 'react'
import ReactMarkdown from 'react-markdown'

import Banner from './Banner'

const input = '# This is a header\n\nAnd this is a paragraph'

const ProjectDetail = () => (
    <div id="page__project-detail">
        <Banner />
        <div className="container">
            <hr />
        </div>
        <section id="section__content" className="section content markdown__content">
            <div className="container">
                <ReactMarkdown source={input} />
            </div>
        </section>
    </div>
)

export default memo(ProjectDetail)