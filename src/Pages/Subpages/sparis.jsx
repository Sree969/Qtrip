import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import '../Bangalore.css'

function Lowtra(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=9536498117");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function NorthVenwar(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2008775850");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function UlgreenUponPockporth(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=6905241907");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function BoltrailInRoyamoor(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5770077080");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function GrandDinyardlodge(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=6298356896");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function Nia(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3365319720");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function WestMarsh(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=9680463758");
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

function Paultra(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5244806429");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function Pidsspa(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3077909052");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

function Milgee(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5308549680");
        api.then(x=>x.json()).then(x=>setState([x])).catch(e=>console.log("Api failed",e))
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

export {Lowtra,NorthVenwar,UlgreenUponPockporth,BoltrailInRoyamoor,GrandDinyardlodge,Nia,WestMarsh,Paultra,Pidsspa,Milgee}