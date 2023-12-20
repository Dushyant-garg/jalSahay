import React from 'react'
import disastermanagement from './logos/disastermanagement.png'
import mylogo3 from './logos/mylogo3.png'
import logo5 from './logos/logo5.jpg'
import g20 from './logos/g20.png'
import make2 from './logos/make2.png'
import swachBharat from './logos/swach-bharat.png'
import logoAzadiH from './logos/logo_azadi_H.png'
import sj3 from './logos/sj3.png'
import sih from './logos/sih.svg'
import { Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

const Header = () => {
    const firebase = useFirebase()
    return (
        <div>
            <div className="top-bar">
                <div className="sj">
                    Government of India
                    <img src={sj3} height="35px" width="35px" />
                </div>

                <p>Email: jalSahay@gmail.com</p>
                <p>Contact: +1 123 456 7890</p>
            </div>
            <header>
                <div className="logo-section">
                    <img className="image1" src={disastermanagement} alt="Jal Sahay" />
                    <img className="image2" src={mylogo3} alt="Ministry of jal shakti" />
                    <img className="image3" src={logo5} alt="Ministry of jal shakti" />
                    <img className="image4" src={g20} alt="Ministry of jal shakti" height="170px" width="200px" />
                </div>
                <div className="logo-section">
                    <img className="image5" src={make2} alt="Jal Sahay" height="170px" width="250px" />
                    <img className="image2" src={swachBharat} alt="Ministry of jal shakti" />
                    <img className="image4" src={sih} alt="Ministry of jal shakti" />
                    <img className="image3" src={logoAzadiH} alt="Ministry of jal shakti" height="170px" width="260px" />
                </div>
            </header>
            <div className="top-bar2">
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a style={{ "fontFamily": "'Oswald', sans-serif" }}  className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a style={{ "fontFamily": "'Oswald', sans-serif" }} className="nav-link scrollto" href="#counts">About</a></li>
                        <li><a style={{ "fontFamily": "'Oswald', sans-serif" }} className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a style={{ "fontFamily": "'Oswald', sans-serif" }} className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a style={{ "fontFamily": "'Oswald', sans-serif" }} className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
            <section id="home">
                <div className="login-section">
                    <h2 style={{ "fontFamily": "'Oswald', sans-serif" }}><b>Welcome to जल सहाय</b></h2>
                    <h4 style={{ "fontFamily": "'Oswald', sans-serif" }} >Dedicated to ensuring resilient and sustainable solutions for the well-being of all </h4>
                    <h2 style={{ "fontFamily": "'Oswald', sans-serif" }}><b>Many problems one Solution</b></h2>
                    <div>
                        <button type="button" className="btn btn-info w-100">
                            <Link to={firebase.isLoggedIn ? "/dashboard" : "/login"} className="btn-get-started scrollto">
                                Get Started
                            </Link>
                        </button>

                    </div>
                </div>
                {/* CAROUSEL */}
                <div className="bg-display">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval='2100'>
                                <img src='./lastsj.svg' className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval='2100'>
                                <img src="./c2.svg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval='2100'>
                                <img src="./c3.svg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Header
