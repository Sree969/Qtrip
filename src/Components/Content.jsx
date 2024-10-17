import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom"
// import Goa from "../Pages/Goa";
// import Bangalore from "../Pages/Bangalore";
export default function Content(){
    let [state,setState]=useState([]);
    // let navigate=useNavigate()
    useEffect(()=>{
        let api=axios.get("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities");
        // console.log(api);
        // api.then(x=>{console.log(x);})
        api.then(x=>
            setState(x.data)
            // console.log(x.data)
        ).catch(e=>console.log(e));
    },[])
    return(
        <>
            <div id="d2">
            {state.map((x,y)=>{
                return(
                
                    <div key={y}>
                        <Link to={"/"+x.id}>
                            <div className="d2c">
                                <img className="pics" src={x.image} alt={x.id} />
                                <div className="tex">
                                    <h5 className="tex1">{x.city}</h5>
                                    <p className="tex2">{x.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
            </div>
        </>
    )
}
