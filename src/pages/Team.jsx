import React from 'react'
import aryan from './logos/Aryan.jpg'
import dushyant from './logos/Dushyant.jpg'
import priya from './logos/priya.jpg'
import sheena from './logos/Sheena.jpg'
import vansh from './logos/vansh.jpg'
import yashpal from './logos/yash.jpeg'

const Team = () => {
    return (
        <div>
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 className='cat-h2' style={{ "fontFamily": "'Oswald', sans-serif" }}>Team</h2>
                        <h3><span className='cat-span' style={{ "fontFamily": "'Oswald', sans-serif" }}>Our Team</span></h3>
                        <p></p>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={aryan} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Aryan Bansal</h4>
                                    <span>Frontend Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={dushyant} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Dushyant Garg</h4>
                                    <span>Fullstack Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <div className="member-img">
                                    <img src={vansh} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Vansh Punia</h4>
                                    <span>Android Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <div className="member-img">
                                    <img src={priya} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Priya Chauhan</h4>
                                    <span>Android Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <div className="member-img">
                                    <img src={yashpal} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Yashpal Saini</h4>
                                    <span>ML Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                            <div className="member">
                                <div className="member-img">
                                    <img src={sheena} className="img-fluid" alt="" />
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sheena Sharma </h4>
                                    <span>Android Developer</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
