import React, { useState } from 'react'
import Logo from "../Images/Logo.png"
import { Link, useNavigate, } from 'react-router-dom'

const Signin = (props) => {

    const history = useNavigate()

    const [login, setlogin] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target
        setlogin({ ...login, [name]: value })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/api/auth/signin`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            }, body: JSON.stringify({ email: login.email, password: login.password })
        })
        const ParsedData = await response.json()
        console.log(ParsedData.authtoken)
        if (response.status === 200) {
            props.showAlert("Login Sucessful", "dark")
            localStorage.setItem("authtoken", ParsedData.authtoken)
            history("/")
        }
        else {
            props.showAlert("Login Error", "dark")
        }

    }


    return (
        <>
            <div className="card  text-black mx-auto " style={{ marginTop: "80px", maxWidth: "30rem" }}>



                <div className="card-header">
                    <div className="d-flex align-items-center  justify-content-center">

                        {/* eslint-disable-next-line */}
                        <img src={Logo} height="35" width="auto" className='me-1' />
                        <span className='fs-4 ms-1' style={{ fontFamily: 'Pacifico' }}>
                            NotesOnCloud
                        </span>
                    </div>
                </div>


                <div className="card-body text-black">

                    <form>
                        <h5 className="fw-bold  mb-3 text-center ">SignIn Your Account</h5>

                        <div className=" mb-4">
                            <label className="form-label ms-0" htmlFor="form2Example17">Email address : </label>
                            <input onChange={onChange} name='email' type="email" id="form2Example17" className="form-control form-control-lg" />
                        </div>

                        <div className=" mb-4">
                            <label className="form-label ms-0" htmlFor="form2Example27" >Password :</label>
                            <input onChange={onChange} name='password' type="password" id="form2Example27" className="form-control form-control-lg" />
                        </div>

                        <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" onClick={HandleSubmit}>Login</button>
                        </div>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className=" pb-lg-2" style={{ color: "#393f81" }}>Don't have an account ? &rarr; <Link to="/register" style={{ color: "#393f81" }}>Register </Link></p>

                    </form>

                </div>
            </div>

        </>
    )
}

export default Signin
