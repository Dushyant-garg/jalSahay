import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

const Sidebar = () => {
    const firebase = useFirebase()
    return (
        <div>
            <section id="sidebar">
                <ul class="side-menu top">
                    <Link to="/">
                        <i class='bx bxs-smile'></i>
                        <span class="text side-text">JalSahay</span>
                    </Link>
                    <li class="active">
                        <Link to="/dashboard">
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text side-text">Dashboard</span>
                        </Link>
                    </li>
                    </ul>
                <ul class="side-menu">
                    <li>
                        <Link to="/team">
                            <i class='bx bxs-cog' ></i>
                            <span class="text side-text">Team</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={(e)=>firebase.logOut()} class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text side-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default Sidebar
