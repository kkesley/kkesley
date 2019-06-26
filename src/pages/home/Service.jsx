import React, { memo } from 'react'

import './Service.scss'

import ImageWeb from 'assets/web.png'
import ImageSystem from 'assets/system.png'
import ImageData from 'assets/data.png'

const Service = () => (
    <section id="section__service" className="section section__service is-medium bg-darker">
          <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <div className="content is-medium">
                        <img role="presentation" alt="Interactive Application" src={ImageWeb} />
                        <h4 className="title is-4 is-spaced">Interactive Application</h4>
                        <p className="subtitle is-5">User experience is critical to the success of an application. Efficient interactions with beautiful interface are always in my priorities.</p>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="content is-medium">
                        <img role="presentation" alt="System Design" src={ImageSystem} />
                        <h4 className="subtitle is-4">System Design</h4>
                        <p className="subtitle is-5">I love creating scalable systems by creating components and combining them. It's always been my passion to architect systems, especially in AWS.</p>
                    </div>
                </div>
                <div className="column is-one-third">
                    <div className="content is-medium">
                        <img role="presentation" alt="Data Structure" src={ImageData} />
                        <h4 className="subtitle is-4">Data Structure</h4>
                        <p className="subtitle is-5">Either SQL or NoSQL, I'm passionate in structuring data for systems. I believe efficient data structures can have a big impact on system qualities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default memo(Service)