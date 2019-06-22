import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './ProjectItem.scss'

const ProjectItem = ({ project }) => (
    <div className="content is-medium has-text-centered">
        <a href="abc" className="image-overlay-container">
            <img role="presentation" alt="System Design" src={project.poster} />
            <div className="is-overlay"></div>
        </a>
        <h4 className="title is-4">{project.title}</h4>
        <p className="subtitle is-6">{project.year}</p>
    </div>
)

export default memo(ProjectItem)