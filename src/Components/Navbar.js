import React from 'react'
import { Link, } from 'react-router-dom'
import Logo from "../Images/Logo.png"

const Navbar = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0 d-flex align-items-center" to="/">
                            {/* eslint-disable-next-line */}
                            <img src={Logo} height="25" width="auto" className='mx-2' />
                            <span style={{ fontFamily: 'Pacifico' }}>
                                NotesOnCloud
                            </span>
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contect</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <Link className="text-reset me-3" data-mdb-toggle="modal" data-mdb-target="#Addmodal">
                            Add New Note
                        </Link>
                        <Link className="text-reset me-3" to="/register" >
                            Register
                        </Link>
                        <Link className="text-reset me-3" to="/signin" >
                            SignIn
                        </Link>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
