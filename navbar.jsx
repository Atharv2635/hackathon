import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'

function Navbar() {
    // const {cart}= useSelector(state => state.cart)
    const navigate=useNavigate()
    const logout=()=>{
        window.sessionStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home/food-list">Blog App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/addblog">Add Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addcategory">Add Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home/myblogs">My blogs</Link>
                        </li>
                         <li className="nav-item">
                            <button className="nav-link " onClick={logout}>LogOut</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar