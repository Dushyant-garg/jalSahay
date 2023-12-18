import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

const Register = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (firebase.isLoggedIn) {
            // navigate to home
            navigate("/login");
        }
    }, [firebase, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signin up a user...");
        const result = await firebase.signupUserWithEmailAndPassword(
            email,
            password,
        );
        console.log("Successfull", result);
    };
    return (
        <div className="body">
            <div class="registration-container">
                <h2>Registration Form</h2>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required />
                    </div>
                    <div class="form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>


        // <div className='container'>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        //         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
        //         <button>Register</button>
        //     </form>
        // </div>
    )
}

export default Register
