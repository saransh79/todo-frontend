import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { API_URL } from "./api";

const Login = () => {
    const location = useNavigate()

    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${API_URL}/login`, data).then(res => {
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('email', res.data.email)
            location('/')
            // console.log(res.data);
        }).catch(e => {
            setError(e.response.data)
        })
    }
    return (
        <header className="auth-header">
            <h1>Sign In</h1>
            <div>

                <form action="POST" className="auth-form">
                    <input
                        name="email"
                        type='email'
                        onChange={handleChange}
                        value={data.email || ''}
                        placeholder="Enter your email..."
                    />
                    <input
                        name="password"
                        type="text"
                        value={data.password || ''}
                        onChange={handleChange}
                        placeholder="Enter your password..."
                    />
                    <p style={{
                        color: 'red'
                    }}>{error}</p>
                    <button className="button selected" type="submit" onClick={handleSubmit}>Sign In</button>

                </form>
                <p className="auth-para" onClick={() => {
                    location('/signup')
                }}>Click here to sign up!</p>
            </div>
        </header>

    )
}

export default Login