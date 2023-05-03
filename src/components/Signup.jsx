import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { API_URL } from "./api";

const Signup = () => {
    const location = useNavigate()

    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${API_URL}/signup`, data).then(res => {
            location('/login')
        }).catch(e => {
            setError(e.response.data)
        })
    }
    return (
        <header className="auth-header">
            <h1>Sign Up</h1>
            <form action="POST" className="auth-form">
                <input
                    name="name"
                    type='text'
                    onChange={handleChange}
                    value={data.name || ''}
                    placeholder="Name..."
                />
                <input
                    name="email"
                    type='email'
                    onChange={handleChange}
                    value={data.email || ''}
                    placeholder="Email..."
                />
                <input
                    name="password"
                    type="text"
                    value={data.password || ''}
                    onChange={handleChange}
                    placeholder="Password..."
                />
                <p style={{
                    color: 'red'
                }}>{error}</p>
                <button className="button selected" type="submit" onClick={handleSubmit}>Sign Up</button>

            </form>
            <p className="auth-para" onClick={() => {
                location
                    ('/login')
            }}>Already have an account? Sign In here!</p>
        </header>

    )
}

export default Signup