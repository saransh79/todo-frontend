import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const location = useNavigate()
    const name = localStorage.getItem('name')
    const handleLogout = (e) => {
        e.preventDefault();
        if (name) {
            location('/');
            localStorage.removeItem('name')
            localStorage.removeItem('email')
        }
        else location('/login')
    }

    return (
        <div style={{
            display: 'flex',
            height: '2rem',
            color: '#fff',
            background: '#34495e',
            padding: '1rem 2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
        }}>
            <p>{name ? `Welcome ${name}` : `Todo App`}</p>
            <p onClick={handleLogout}>{name ? 'Logout' : 'Login'}</p>
        </div>
    )
}

export default Navbar