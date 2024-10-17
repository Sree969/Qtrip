import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
export default function Register(){
    let navigate = useNavigate()
    function regdata(){
                      let email=document.getElementsByTagName("input")[0].value
                      let pass=document.getElementsByTagName("input")[1].value
                      let repass=document.getElementsByTagName("input")[2].value

                      if(pass===repass){
                        window.sessionStorage.setItem("userEmail",email);
                        window.sessionStorage.setItem("userpassword",pass);
                        navigate("/login")}
                      else{alert("Re enter correct password")}                   
    }
    return(
        <>
        <Navbar/>
        <div className="dlog">
        <div id="reg">
            <h2>Register</h2>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Type to create account password" />
            <p>Password must include at least one special character and a numeric character</p>
            <input type="password" placeholder="Retype Password to Confirm" />
            <button onClick={regdata}>Register Now</button>
        </div>
        </div>
        <Footer/>
        </>
    )
}