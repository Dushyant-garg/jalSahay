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
                        <i class='bx bx-home'></i>
                        <span class="text side-text">JalSahay</span>
                    </Link>
                    <li class="active">
                        <Link to="/dashboard">
                            <i class="fa-solid fa-chalkboard"></i>
                            <span class="text side-text">Dashboard</span>
                        </Link>
                    </li>
                    <li class="active">
                        <Link to="/cctv">
                            <i class='bx bx-cctv'></i>
                            <span class="text side-text">CCTV</span>
                        </Link>
                    </li>
                    <li class="active">
                        <Link to="/social-media">
                            <i class="fa-solid fa-hashtag"></i>
                            <span class="text side-text">Social Media</span>
                        </Link>
                    </li>
                    <li class="active">
                        <Link to="/analyze">
                            <i class="fa-solid fa-magnifying-glass-chart"></i>
                            <span class="text side-text">Analysis</span>
                        </Link>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <Link to="/team">
                            <i class="fa-solid fa-people-group"></i>
                            <span class="text side-text">Team</span>
                        </Link>
                    </li>
                    <li>
                        <button style={{ "marginLeft": "10px" }} onClick={(e) => firebase.logOut()} class="logout">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span class="text side-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default Sidebar
