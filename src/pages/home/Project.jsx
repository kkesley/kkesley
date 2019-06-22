import React, { memo } from 'react'
import ProjectItem from 'components/project-item'


import ImagePropertiAnda from 'assets/projects/properti-anda.png'
import ImageGakushudo from 'assets/projects/gakushudo.png'
import ImageGakushudoApp from 'assets/projects/gakushudo-app.png'
import ImageTaxation from 'assets/projects/taxation.png'
import ImageTheParlour from 'assets/projects/theparlour.png'
import ImageIteacup from 'assets/projects/iteacup.png'
import ImageVeronicaOng from 'assets/projects/veronicaonggoro.png'
import ImageMaximumEffort from 'assets/projects/maximumeffort.png'
import ImageCPA from 'assets/projects/CPA.png'
import ImagePsychPress from 'assets/projects/psychpress.png'

const Project = () => (
    <section id="section__tech-stack" className="section">
        <div className="container">
            <h2 className="title is-2">Projects</h2>
            <p className="subtitle">Commercial and personal projects throughout my journey.</p>
            <div className="columns is-multiline">
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageVeronicaOng, title: 'veronicaonggoro.com', year: '2017 - 2018' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImagePsychPress, title: 'career @ psych press', year: '2017 - 2019' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImagePropertiAnda, title: 'propertianda.com', year: '2016 - 2018' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageTheParlour, title: 'the parlour', year: '2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageGakushudo, title: 'gakushudo.com', year: '2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageGakushudoApp, title: 'gakushudo mobile app', year: '2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageTaxation, title: 'taxation', year: '2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageIteacup, title: 'iteacup', year: '2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageCPA, title: 'CPA competition system', year: '2015 & 2016' }} />
                </div>
                <div className="column is-half">
                    <ProjectItem project={{ poster: ImageMaximumEffort, title: 'maximum effort', year: '2015 - 2016' }} />
                </div>
            </div>
            {/* <p className="subtitle">Want to see more? <a href="asd" className="has-text-link">Click me!</a></p> */}
        </div>
    </section>
)

export default memo(Project)