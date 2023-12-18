import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'

const ListCard = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()
    const [url, setUrl] = useState()

    useEffect(() => {
        firebase.getImageURL(props.imageURL).then((url) => setUrl(url))
    })
    return (
        <div>
            <tr>
                <td scope="row">{props.id}</td>
                <td>{props.problem}</td>
                <td>{url}</td>
                <td>{props.city}</td>
                <td>{props.status}</td>
            </tr>
        </div>
    )
}

export default ListCard
