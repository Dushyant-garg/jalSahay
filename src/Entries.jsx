import React, { useEffect, useState } from 'react'
import { useFirebase } from './context/Firebase'
import ComplaintCard from './components/ComplaintCard'
import { Link } from 'react-router-dom'

const Entries = () => {
    const [name, setName] = useState('')
    const [problem, setProblem] = useState('')
    const [category, setCategory] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [status, setStatus] = useState("Registered")
    const [photo, setPhoto] = useState("")
    const [search, setSearch] = useState("")

    const [complaints, setComplaints] = useState([])

    const firebase = useFirebase()

    useEffect(() => {
        const fetchData = async () => {
            const res = await firebase.listAllComplaints()
            // console.log(res.docs[0].data())
            setComplaints(res.docs)
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await firebase.handleCreateNewListing(name, problem, category, address, city, coordinates, photo, status)
        console.log("Complaint Registered")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                Problem : <input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} />
                <select className="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option >Category</option>
                    <option value="Flood">Flood</option>
                    <option value="Drainage">Drainage</option>
                    <option value="Potholes">Potholes</option>
                </select>
                Address : <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                City : <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                Coordinates : <input type="text" value={coordinates} onChange={(e) => setCoordinates(e.target.value)} />
                {/* Status : <input type="Number" disabled value={status} onChange={(e) => setLongitude(e.target.value)} /> */}
                Photo : <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                <button>Submit</button>
            </form>

            <br /><br /><br /><br />

            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Link to={`/search/${search}`}>Search</Link><br />


            <br /><br /><br /><br />
            <div className="container mb-5">
                <Link to={`/categories/Flood`}>Flood</Link><br />
                <Link to={`/categories/water logging`}>Drainage</Link>
            </div>
            <br /><br /><br /><br />
            <div className="container mb-5">
                <Link to={`/status/Registered`}>Registered</Link><br />
                <Link to={`/status/ongoing`}>Ongoing</Link>
            </div>

            <div className='container'>
                <div className="card-group">
                    {complaints.map(cmp => (
                        <ComplaintCard key={cmp.id} id={cmp.id} {...cmp.data()} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Entries
