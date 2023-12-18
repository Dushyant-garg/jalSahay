import React from 'react'
import resolvedImage from './logos/7.svg'
import registeredImage from './logos/6.svg'
import cancelledImage from './logos/8.svg'
import ongoingImage from './logos/9.svg'
import useStatus from '../hooks/useStatus';

const About = () => {
    const { registered, ongoing, solved, cancelled } = useStatus()
    return (
        <div>
            <section id="counts" className="counts">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <img src={registeredImage} width="110px" height="120px" />
                                <i className="fa-solid fa-flag"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <h1>Registered</h1>
                                <h2>{registered.length + solved.length + ongoing.length + cancelled.length}</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <img src={resolvedImage} width="110px" height="120px" />
                                <i className="fa-solid fa-flag"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <h1>Resolved</h1>
                                <h2>{solved.length}</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <img src={ongoingImage} width="110px" height="120px" />
                                <i className="fa-solid fa-flag"></i>
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                <h1>In Progress</h1>
                                <h2>{ongoing.length}</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <img src={cancelledImage} width="110px" height="120px" />
                                <i className="fa-solid fa-flag"></i>
                                <span data-purecounter-start="0" data-purecounter-end="63" data-purecounter-duration="1" className="purecounter"></span>
                                <h1>Cancelled</h1>
                                <h2>{cancelled.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
