import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    let navigate=useNavigate();
        return(
            
            <nav>
                <ul>
                    <li><a href="">Qtrip</a></li>
                    <div id="ul1">
                        <ul>
                            <li><button id="bb1"><a href="">Home</a></button></li>
                            <li><button id="bb2"><a href="">Reservations</a></button></li>
                            <li><button id="b1" onClick={()=>navigate("/login")} ><a id="b1" href="">Login Here</a></button></li>
                            <li><button id="b2" onClick={()=>navigate("/register")}><a id="b2" href="">Register</a></button></li>
                        </ul>
                    </div>
                </ul>
            </nav>
            

        )
}