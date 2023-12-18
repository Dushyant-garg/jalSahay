import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useParams } from 'react-router-dom'
import ComplaintCard from '../components/ComplaintCard'
import Sidebar from '../components/Sidebar'
import '../css/dashboard.css'

const Search = () => {
    const firebase = useFirebase()
    const params = useParams()
    const [complaints, setComplaints] = useState([])
    console.log(params.location)

    useEffect(() => {
        const fetchData = async () => {
            const res = await firebase.fetchMyComplaintsUsingLocation(params.location)
            // console.log(res.docs[0].data())
            setComplaints(res.docs)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Sidebar />
            <section id="content">
                <div class="raised-queries">
                    <h2>Raised Queries ({complaints.length})</h2>
                    {complaints.map(cmp => (
                        <div class="info-card raised">
                            <h2>Raised</h2>
                            <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
        // <div className='container'>
        //     <h1>{params.location}</h1>
        //     <h2>{complaints.length}</h2>
        //     <div className="card-group">
        //         {complaints.map(cmp => (
        //             <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
        //         ))}
        //     </div>
        // </div>
    )
}

export default Search
