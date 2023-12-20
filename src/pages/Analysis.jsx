import React from 'react'
import Sidebar from '../components/Sidebar'
import "../css/analysis.css"

const Analysis = () => {
    return (
        <div>
            <Sidebar />
            <section id="content">
                <nav className='dash-nav'>
                    <div class="navbar-heading" style={{ "color": "white" }}>Analysis</div>
                    <div class="form-input">
                        <input type="search" placeholder="Search for location" />
                        <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                    </div>
                </nav>
                
                <div className="top-bar2">
                    <h1 class="heading-chart">Solved Cases in past 3 Months :-</h1>
                </div>
                <main>
                    <div class="half half1">


                        <div class="third rsv" >

                            <div>
                                <img class="rsv-img" src="./graph4.svg" height="850px" width="400px" />
                            </div>
                            <div>
                                <div class="third ctg" ><img src="./graph5.svg" height="550px" width="500px" /></div>

                            </div>
                            {/* <div class="third3 pie"><img src="./graph3.svg" height="550px" width="550px" /></div> */}

                        </div>
                        <div><img className='pie' src="./graph3.svg" height="550px" width="550px" /></div>
                        <div><img className='reg-graph' src="./registerGraph.svg" height="270px" width="420px" /></div>
                        <div class="third ctg" ><img src="./lineChart.svg" className='line' /></div>

                    </div>
                    <div className="top-bar2 mt">
                        <h1 class="heading-chart">Cases solved in the Past Year:-</h1>
                    </div>
                    <div class="half half2">
                        <div class="third">
                            <img src="./graph1.svg" height="550px" width="550px" />
                        </div>
                        <div class="third">
                            <img src="./graph2.svg" height="550px" width="550px" />

                        </div>
                    </div>
                </main>
            </section >
        </div>
        // <div className="container">
        //     <div className="row d-flex justify-content-space-between">
        //         <div className="col-md-3">
        //             <img src="./graph1.svg" alt="" />
        //         </div>
        //         <div className="col-md-3">
        //             <img src="./graph2.svg" alt="" />
        //         </div>
        //         <div className="col-md-3">
        //             <img src="./graph3.svg" alt="" />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Analysis
