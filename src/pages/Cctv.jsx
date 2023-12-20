import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import Sidebar from '../components/Sidebar';
import About from './About';
import ComplaintCard from '../components/ComplaintCard';

const Cctv = () => {
    const [list, setList] = useState(false);
    const [search, setSearch] = useState()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const firebase = useFirebase()

    useEffect(() => {
        const getData = async () => {
            const res = await firebase.fetchMyComplaintsUsingName()
            setData(res.docs)
        }
        getData()
    }, [])
    return (
        <div className='dash-body'>
            <Sidebar />
            <section id="content">
                <nav className='dash-nav'>
                    <div class="navbar-heading" style={{ "color": "white" }}>CCTV Dashboard</div>
                    <div class="form-input">
                        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for location" />
                        <button type="submit" onClick={(e) => navigate(`/search/${search}`)} class="search-btn"><i class='bx bx-search' ></i></button>
                    </div>
                    <div>
                        <button className='btn btn-light w-100 mb-2' onClick={(e) => setList(!list)}>{list ? "Card View" : "List View"}</button>

                        {/* <div class="dropdown">
              <button class="btn btn-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Distance</a></li>
                <li><a class="dropdown-item" href="#">Problem</a></li>
                <li><a class="dropdown-item" href="#">Population</a></li>
              </ul>
            </div> */}
                        {/* <button className='btn btn-light mx-2'>Sort</button> */}
                    </div>

                </nav>
                <About />
                <div class="raised-queries">
                    <h2 style={{ "fontFamily": "'Oswald', sans-serif" }}>Raised Queries</h2>
                    {list ? <>
                        <div className="table-responsive" style={{ "width": "100%" }}>
                            <table className="table table-info align-middle table-striped">
                                <thead>
                                    <tr className="alternate-color">
                                        <th scope="col">QueryID</th>
                                        <th scope="col">Category</th>
                                        {/* <th scope="col">Image</th> */}
                                        <th scope="col">City</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" >View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(cmp => (
                                        <tr>
                                            <th scope="row">{cmp.id}</th>
                                            <td>{cmp.data().category}</td>
                                            {/* <td>{firebase.getImageURL(cmp.data().imageURL)}</td> */}
                                            <td>{cmp.data().city}</td>
                                            <td>{cmp.data().status}</td>
                                            <button type="button" onClick={(e) => navigate(`/complaint/${cmp.id}`)} className="btn btn-info w-100"><td>View</td></button>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </> : <>
                        {data.map(cmp => (
                            <div class="info-card raised">
                                <h2>Raised</h2>
                                <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
                            </div>
                        ))}

                    </>
                    }

                </div>
            </section>
        </div>

    )
}

export default Cctv
