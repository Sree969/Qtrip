import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import '../Bangalore.css'

function Niaboytown(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2447910730");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function Fortsion(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=1773524915");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function Wooddaux(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0355034513");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function Bageorge(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2260150453");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function Stonelumhawk(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=1921387712");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function LaAnrncast(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=7938812489");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function FortShilbluff(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2757195090");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function Shiwood(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3727396712");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

function EastVyfolk(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2211420097");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e));
    },[])
    return(
        <div id="nia">
            {state.map((x,y)=>{
                return(
                    
                    <div key={y}>
                    <h1 id="niah">{x.name}</h1>
                    <p id="h44">{x.subtitle}</p>
                    <div id="car">
                        <Carousel >
             
                            <img src={x.images[0]}  alt="image1" />
              
                            <img src={x.images[1]}   alt="image1" />
             
                            <img src={x.images[2]}    alt="image1" />
            
                        </Carousel>
                    </div>
                    <hr/>
                    <h5 id="abt">About the Experience</h5>
                    <div id="niacont">{x.content}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}
export {Niaboytown,Fortsion,Wooddaux,Bageorge,Stonelumhawk,LaAnrncast,FortShilbluff,Shiwood,EastVyfolk}