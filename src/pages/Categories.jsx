import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate, useParams } from 'react-router-dom'
import ComplaintCard from '../components/ComplaintCard'
import Sidebar from '../components/Sidebar'

const Categories = () => {
  const firebase = useFirebase()
  const params = useParams()
  const navigate = useNavigate()
  const [complaints, setComplaints] = useState([])
  const [search, setSearch] = useState()
  console.log(params.cat)

  useEffect(() => {
    const fetchData = async () => {
      const res = await firebase.fetchMyComplaints(params.cat)
      // console.log(res.docs[0]?.data())
      setComplaints(res.docs)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Sidebar/>
      <section id="content">
        <nav className='dash-nav'>
          <div class="navbar-heading" style={{ "color": "white" }}>Dashboard</div>
          <div class="form-input">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for location" />
            <button type="submit" onClick={(e) => navigate(`/search/${search}`)} class="search-btn"><i class='bx bx-search' ></i></button>
          </div>
          {/* <div class="categories-dropdown">
            <button class="dropbtn">Categories</button>
            <div class="categories-dropdown-content">
              <a href="#">Category 1</a>
              <a href="#">Category 2</a>
              <a href="#">Category 3</a>
              <a href="#">Category 4</a>
              <a href="#">Category 5</a>
            </div>
          </div> */}
        </nav>

        <main>
          <div class="raised-queries">
            <h2>Raised Queries ({complaints?.length}) for {params.cat}</h2>
            {complaints?.map(cmp => (
              <div class="info-card raised">
                <h2>Raised</h2>
                <ComplaintCard key={cmp?.id} id={cmp?.id} {...cmp?.data()} />
              </div>
            ))}
          </div>
        </main >
      </section >
      {/* <h1>{params.cat}</h1>
      <h2>{complaints.length}</h2>
      <div className="card-group">
        {complaints.map(cmp => (
          <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
        ))}
      </div> */}
    </div >
  )
}

export default Categories
