import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './ProjectItem.scss'

const ProjectItem = ({ project }) => project && (
    <div className="content is-medium has-text-centered">
        <Link to={`/projects/${project.project_id}`} className="image-overlay-container">
            <img role="presentation" alt={project.title} src={project.poster_url} />
            <div className="is-overlay"></div>
        </Link>
        <h4 className="title is-4">{project.title}</h4>
        <p className="subtitle is-6">{project.year}</p>
    </div>
)

export default memo(ProjectItem)