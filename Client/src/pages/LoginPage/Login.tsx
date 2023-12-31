import React from 'react'
import { useState } from 'react';
import './Login.css';
import 'boxicons' from "boxicons";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Logging in with:', { username, password });
    };
    return (
        <div className='login-container'>
            <div className='login-heading'>
                <h1>Log-In</h1>
            </div>
            <form className='form-container'>
                <label className="blackText">
                    Username:
                    <input type="text" className="username-container" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label className="blackText">
                    Password:
                    <input type="password" className="password-container" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
            <p className="blackText">
                Don't have an account? <a href="/Signup">Sign up</a>
            </p>
        </div>
    )
}

export default Login