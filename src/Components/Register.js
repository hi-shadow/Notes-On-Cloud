import React, { useState } from 'react'
import Logo from "../Images/Logo.png"
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const history = useNavigate()
  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const OnChange = (e) => {
    const { name, value } = e.target
    setregister({ ...register, [name]: value })
  }
  const HandleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:8000/api/auth/registration`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      }, body: JSON.stringify({ name: register.name, email: register.email, password: register.password })
    })
    const ParsedData = await response.json()
    localStorage.setItem("authtoken", ParsedData.authtoken)
    history("/")

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

          <form onSubmit={HandleSubmit} >
            <h5 className="fw-bold  mb-3 text-center ">Register New Account</h5>

            <div className=" mb-4">
              <label className="form-label ms-0" htmlFor="form2Example18">Full Name : </label>
              <input onChange={OnChange} name='name' type="text" id="form2Example18" className="form-control form-control-lg" required />
            </div>

            <div className=" mb-4">
              <label className="form-label ms-0" htmlFor="form2Example17">Email address : </label>
              <input onChange={OnChange} name='email' type="email" id="form2Example17" className="form-control form-control-lg" required />
            </div>

            <div className=" mb-4">
              <label className="form-label ms-0" htmlFor="form2Example27" >Password :</label>
              <input onChange={OnChange} name='password' type="password" id="form2Example27" className="form-control form-control-lg" required minLength={8} />
            </div>

            <div className=" mb-4">
              <label className="form-label ms-0" htmlFor="cform2Example27" >Confirm Password :</label>
              <input onChange={OnChange} name='cpassword' type="password" id="cform2Example27" className="form-control form-control-lg" required minLength={8} />
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-dark btn-lg btn-block" disabled={register.password !== register.cpassword || register.password.length < 8} type="submit" >Login</button>
            </div>

            <a className="small text-muted" href="#!">Forgot password?</a>
            <p className=" pb-lg-2" style={{ color: "#393f81" }}>Have an account? : <Link to="/signin" style={{ color: "#393f81" }}>Login </Link></p>

          </form>

        </div>
      </div>

    </>
  )
}

export default Register
