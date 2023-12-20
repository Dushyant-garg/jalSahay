import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { Link, useNavigate } from 'react-router-dom'

const ComplaintCard = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    const [url, setUrl] = useState()

    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setUrl(url))
    })

    return (
        <div class="text">
            <img src={url} alt="Raised Image 1" />
            <div class="details">
                {/* <div><strong>Problem:  </strong>
                    <span>{props.problem}</span>
                </div> */}
            </div>
            <div class="details">
                <div><strong>Category:  </strong>
                    <span>{props.category}</span>
                </div>
            </div>
            <div class="details">
                <div><strong>Address:  </strong>
                    <span>{props.address}</span>
                </div>
            </div>
            <div class="details">
                <div><strong>Status:  </strong>
                    <span>{props.status}</span>
                </div>
            </div>

            <div class="details">
                <div><strong>Date and Time:  </strong>
                    <span>Timestamp for when the query was raised.</span>
                </div>
            </div>

            <button onClick={(e) => navigate(`/complaint/${props.id}`)} class="view-btn">View</button>
        </div>
    )
}

export default ComplaintCard
