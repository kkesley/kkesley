import React, { memo } from 'react'

import './Certification.scss'
import ImageAWSCSAA from 'assets/certifications/AWS-CSAA.jpg'

const Certification = () => (
    <section id="section__certification" className="section section__certification">
        <div className="container">
            <h2 className="title is-2">Certifications</h2>
            <div className="columns">
                <div className="column is-3">
                    <img alt="AWS Certified Solutions Architect - Associate" src={ImageAWSCSAA} title="AWS Certified Solutions Architect - Associate" />
                </div>
            </div>
        </div>
    </section>
)

export default memo(Certification)