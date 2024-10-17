import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import './Bangalore.css'
import {Link} from "react-router-dom"
// import Goa from "../Pages/Goa";
// import Bangalore from "../Pages/Bangalore";
export default function Malaysia(){
    let [state,setState]=useState([]);
    useEffect(()=>{
        let api=axios.get("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=malaysia");
        // console.log(api);
        // api.then(x=>{console.log(x);})
        api.then(x=>setState(x.data)).catch(e=>console.log(e));
    },[])
    return(
        <>
            <Navbar/>
            <div id="bmain">
                <div id="bng1">
                    <h1>Explore all adventures</h1>
                    <p>Here's a list of places that you can explore in city</p>
                    <div id="bng11">
                        <label htmlFor="">Filters </label>
                        <div id="bng111">
                            <select name=""  className='tab'>
                                <option>Filter by Duration (Hours)</option>
                            </select>
                            <div className='cleardiv'>Clear</div>
                        </div>
                        <div id="bng112">
                            <select name=""  className='tab'>
                                <option value="">Add Category</option>
                            </select>
                            <div className='cleardiv'>Clear</div>
                        </div>
                        <div id="bng113">
                            <input type="text" placeholder='Search adventures' className='tab'/>
                            <div className='cleardiv'>Clear</div>
                        </div>
                    </div>
                </div>

                <div id="bng2">
                {state.map((x,y)=>{
                    return(
                        
                            <div key={y}>
                            <Link to={"/"+x.name}>
                            <div className="bngcard">
                            <img src={x.image} alt={x.id}/>
                            <p className="p1">{x.category}</p>
                            <h5 className="h5">{x.name}</h5>
                            <p className="p2">₹{x.costPerHead}</p>
                            <h5 className="h55">Duration</h5>
                            <p className="p3">{x.duration} Hours</p>
                            </div>
                            </Link>
                            </div>
                        
                    )
                })}
                </div>
            </div>
            <Footer/>
        </>
    )
}