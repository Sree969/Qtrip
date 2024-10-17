import React from "react";
import { useNavigate } from "react-router-dom";
// import '../index.css'
export default function Division(){
        let navigate=useNavigate();
        let search=(val)=>{
            let x=val.target.value.toLowerCase();
            switch(x){
                case "bangalore":{navigate("/bengaluru")}
                break;
                case "goa":{navigate("/goa")}
                break;
                case "kolkata":{navigate("/kolkata")}
                break;
                case "singapore":{navigate("/singapore")}
                break;
                case "malaysia":{navigate("/malaysia")}
                break;
                case "bangkok":{navigate("/bangkok")}
                break;
                case "newyork":{navigate("/new-york")}
                break;
                case "paris":{navigate("/paris")}
                break;
            }
        }
        return(
            <div id="d1">
                <div id='d1data'>
                <h1 id="heading">Welcome to Trip</h1>
                <p id="para">Explore the world with fantastic places to venture around</p>
                <input id="ip1" type="text" placeholder="Search a City" onChange={search}/>
                </div>
            </div>
        )
}