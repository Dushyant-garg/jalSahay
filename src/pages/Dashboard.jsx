import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import ComplaintCard from '../components/ComplaintCard'
import Sidebar from '../components/Sidebar'
import About from './About'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [floodData, setFloodData] = useState([]);
  const [drainageData, setDrainageData] = useState([]);
  const [potholesData, setPotholesData] = useState([]);
  const [leakageData, setLeakageData] = useState([]);
  const [list, setList] = useState(false);
  const [search, setSearch] = useState()
  const navigate = useNavigate()

  const firebase = useFirebase()


  useEffect(() => {
    const getFloodData = async () => {
      const res = await firebase.fetchMyComplaints("Flood")
      setFloodData(res.docs)
    }
    const getDrainageData = async () => {
      const res = await firebase.fetchMyComplaints("Drainage")
      setDrainageData(res.docs)
    }
    const getPotholesData = async () => {
      const res = await firebase.fetchMyComplaints("Potholes")
      setPotholesData(res.docs)
    }
    const getLeakageData = async () => {
      const res = await firebase.fetchMyComplaints("Leakage")
      setLeakageData(res.docs)
    }
    getFloodData()
    getDrainageData()
    getPotholesData()
    getLeakageData()
  }, [])

  return (
    <div className='dash-body'>
      <Sidebar />
      <section id="content">
        <nav className='dash-nav'>
          <div class="navbar-heading" style={{ "color": "white" }}>Dashboard</div>
          <div class="form-input">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for location" />
            <button type="submit" onClick={(e) => navigate(`/search/${search}`)} class="search-btn"><i class='bx bx-search' ></i></button>
          </div>
          <div>
            <button className='btn btn-light' onClick={(e) => setList(!list)}>{list ? "Card View" : "List View"}</button>
            <div class="categories-dropdown">
              <button class="sort-dropbtn">Sort</button>
              <div class="categories-dropdown-content">
                <a href="#">Distance</a>
                <a href="#">Problem</a>
                <a href="#">Population</a>
                {/* <a href="#">Category 4</a> */}
              </div>
            </div>
            {/* <button className='btn btn-light mx-2'>Sort</button> */}
          </div>

        </nav>
        <About />
        <div class="raised-queries">
          <h2>Raised Queries</h2>
          {list ? <>
            <h2>List view enabled</h2>
            <div className="table-responsive" style={{ "width": "100%" }}>
              <table className="table table-info align-middle table-striped">
                <thead>
                  <tr className="alternate-color">
                    <th scope="col">QueryID</th>
                    <th scope="col">Problem</th>
                    {/* <th scope="col">Image</th> */}
                    <th scope="col">City</th>
                    <th scope="col">Status</th>
                    <th scope="col" >View</th>
                  </tr>
                </thead>
                <tbody>
                  {floodData.map(cmp => (
                    <tr>
                      <th scope="row">{cmp.id}</th>
                      <td>{cmp.data().problem}</td>
                      {/* <td>{firebase.getImageURL(cmp.data().imageURL)}</td> */}
                      <td>{cmp.data().city}</td>
                      <td>{cmp.data().status}</td>
                      <button type="button" onClick={(e) => navigate(`/complaint/${cmp.id}`)} className="btn btn-info w-100"><td>View</td></button>
                    </tr>
                  ))}
                  {drainageData.map(cmp => (
                    <tr>
                      <th scope="row">{cmp.id}</th>
                      <td>{cmp.data().problem}</td>
                      {/* <td>{cmp.data().imageURL}</td> */}
                      <td>{cmp.data().city}</td>
                      <td>{cmp.data().status}</td>
                      <button type="button" onClick={(e) => navigate(`/complaint/${cmp.id}`)} className="btn btn-info w-100"><td>View</td></button>
                    </tr>
                  ))}
                  {potholesData.map(cmp => (
                    <tr>
                      <th scope="row">{cmp.id}</th>
                      <td>{cmp.data().problem}</td>
                      {/* <td>{cmp.data().imageURL}</td> */}
                      <td>{cmp.data().city}</td>
                      <td>{cmp.data().status}</td>
                      <button type="button" onClick={(e) => navigate(`/complaint/${cmp.id}`)} className="btn btn-info w-100"><td>View</td></button>
                    </tr>
                  ))}
                  {leakageData.map(cmp => (
                    <tr>
                      <th scope="row">{cmp.id}</th>
                      <td>{cmp.data().problem}</td>
                      {/* <td>{cmp.data().imageURL}</td> */}
                      <td>{cmp.data().city}</td>
                      <td>{cmp.data().status}</td>
                      <button type="button" onClick={(e) => navigate(`/complaint/${cmp.id}`)} className="btn btn-info w-100"><td>View</td></button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </> : <>
            {floodData.map(cmp => (
              <div class="info-card raised">
                <h2>Raised</h2>
                <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
              </div>
            ))}
            {drainageData.map(cmp => (
              <div class="info-card raised">
                <h2>Raised</h2>
                <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
              </div>
            ))}
            {potholesData.map(cmp => (
              <div class="info-card raised">
                <h2>Raised</h2>
                <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
              </div>
            ))}
            {leakageData.map(cmp => (
              <div class="info-card raised">
                <h2>Raised</h2>
                <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
              </div>
            ))}
          </>}

        </div>
      </section>
    </div>
  )
}

export default Dashboard
