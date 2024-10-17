import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import '../Bangalore.css'

function NishgamInHaprnia(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8304353098");
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

function TifwalesFerry(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5328424651");
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

function Rstangbe(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3366378787");
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

function Heathber(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5941490724");
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

function LaStonlodgecrosse(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0101381654");
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

function Pidsskebury(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2674554670");
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

function Damsvens(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=6216388298");
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

function RedCragrosse(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2273854765");
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

function Og(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=9828912080");
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

function Colnehill(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2052303734");
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
function Mitsbowich(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3396851354");
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

function Mereceville(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3409781073");
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
export {NishgamInHaprnia,TifwalesFerry,Rstangbe,Heathber,LaStonlodgecrosse,Pidsskebury,Damsvens,RedCragrosse,Og,Colnehill,Mitsbowich,Mereceville}