import React from 'react'

const Contact = () => {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 className='cat-h2'>Contact</h2>
                        <h3><span className='cat-span'>Contact Us</span></h3>
                        <p></p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-4">
                            <div className="info-box  mb-4">
                                <i className="fa-solid fa-square-envelope"></i>
                                <h3>Email Us</h3>
                                <p>jalSahay@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-box  mb-4">
                                <i className="fa-solid fa-mobile-screen"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-box  mb-4">
                                <i className="fa-brands fa-app-store-ios"></i>
                                <h3>App</h3>
                                <p>Link</p>
                            </div>
                        </div>

                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
