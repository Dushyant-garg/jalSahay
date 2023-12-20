import React from 'react'
import flood from './logos/flood.jpeg'
import pipe from './logos/pipe.jpeg'
import pothole from './logos/pothole.jpeg'
import drainage from './logos/drainage.webp'

import { Link } from 'react-router-dom'

const TotalCategories = () => {
    return (
        <div>
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 className='cat-h2' style={{ "fontFamily": "'Oswald', sans-serif" }}>Problem Categorisation</h2>
                        <h3><span className="cat-span" style={{ "fontFamily": "'Oswald', sans-serif" }}>Our Categorisation</span></h3>
                        <div className="card-container">
                            <div className="card">
                                <Link to={`/categories/Flood`}>
                                    <img src={flood} alt="floods" />
                                    <p>Floods</p>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to={`/categories/Potholes`}>
                                    <img src={pothole} alt="Potholes" />
                                    <p>Potholes</p>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to={`/categories/Leakage`}>
                                    <img src={pipe} alt="Leakage" />
                                    <p>Pipe Leakage</p>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to={`/categories/Drainage`}>
                                    <img src={drainage} alt="Drainage" />
                                    <p>Drainage</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TotalCategories
