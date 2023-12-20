import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import '../css/dashboard.css'
import Sidebar from '../components/Sidebar';

const Details = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState(null);
    const [url, setURL] = useState(null);
    const [status, setStatus] = useState(data?.status)
    const [assign, setAssign] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    useEffect(() => {
        firebase.getComplaintById(params.compId).then((value) => setData(value.data()));
    }, [status]);

    useEffect(() => {
        if (data) {
            const imageURL = data.imageURL;
            firebase.getImageURL(imageURL).then((url) => setURL(url));
        }
    }, [data]);

    useEffect(() => {
        if (status)
            firebase.updateStatus(params.compId, status)
    }, [status])

    useEffect(() => {
        if (data) {
            const coords = data?.coordinates
            const [lat, long] = coords.split(',')
            // console.log(parseFloat(latitude))
            // console.log(parseFloat(longitude))
            setLatitude(lat)
            setLongitude(long)
        }
    }, [data])
    console.log(url)

    const mapStyles = {
        height: '400px',
        width: '100%',
    };
    const defaultCenter = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    }

    if (data == null) return <h1>Loading...</h1>;

    return (
        <div>
            <Sidebar />
            <section id="content">
                <nav>
                    <div class="navbar-heading">Details for {data?.category}</div>
                </nav>
                <main>
                    <div class="details-content">

                        <h2>Detailed View</h2>
                        <div class="info-card detailed">
                            <div class="text">
                                {/* <div class="details mb-4">
                                    <div><strong><center>{data?.problem}</center></strong></div>
                                </div> */}

                                <img src={url} alt="Details" />

                                <div class="details">
                                    <div><strong>Query ID:</strong></div>
                                    <div>#{params?.compId}</div>
                                </div>
                                <div class="details">
                                    <div><strong>Category:</strong></div>
                                    <div>{data?.category}</div>
                                </div>
                                <div class="details">
                                    <div><strong>Address:</strong></div>
                                    <div>{data?.address}</div>
                                </div>
                                <div class="details">
                                    <div><strong>City:</strong></div>
                                    <div>{data?.city}</div>
                                </div>
                                <div class="details">
                                    <div><strong>Coordinates:</strong></div>
                                    <div>{data?.coordinates}</div>
                                </div>

                                <div className="details">
                                    <select className="form-select dropbtn w-75" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option >Update Status</option>
                                        <option value="Registered">Registered</option>
                                        <option value="Ongoing">Ongoing</option>
                                        <option value="Solved">Solved</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <div class="details">
                                    <div><strong>Status:</strong></div>
                                    <div>{data?.status}</div>
                                </div>
                                <div className="details">
                                    <div><strong>Assigned to:</strong></div>

                                    <select className="form-select dropbtn w-75" aria-label="Default select example" value={assign} onChange={(e) => setAssign(e.target.value)}>
                                        <option >Assign Query</option>
                                        <option value="team 1">team 1</option>
                                        <option value="team 2">team 2</option>
                                        <option value="team 3">team 3</option>
                                        <option value="team 4">team 4</option>
                                    </select>
                                    {/* </div>
                                <div class="details"> */}
                                    <div>{assign}</div>
                                </div>
                                <div class="details">
                                    <div><strong>Date and Time:</strong></div>
                                    <div>12/5/2023</div>
                                </div>

                                <LoadScript googleMapsApiKey="AIzaSyDGbUWydl_Q_3jUKgdPA-MfNEKq-KLwn2g">
                                    <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
                                        <Marker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
                                        // icon={{
                                        //     url: 'https://w7.pngwing.com/pngs/731/25/png-transparent-location-icon-computer-icons-google-map-maker-marker-pen-cartodb-map-marker-heart-logo-color-thumbnail.png',
                                        //     // scaledSize: new window.google.maps.Size(50, 50), // Adjust the size as needed
                                        //   }}
                                        />
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
        // <div className='container mt-5'>
        //     <h1>{data.problem}</h1>
        //     <img src={url} alt="Complaint Image" style={{width:"50%"}} />
        //     <h1>{data.coordinates}</h1>

        // </div>
    )
}

export default Details
