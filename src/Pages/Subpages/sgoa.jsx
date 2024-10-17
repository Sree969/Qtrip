import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import '../Bangalore.css'

function Perthby(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8549673097");
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

function Nesbridge(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0610512104");
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

function KennticEnd(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=7536826557");
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

function PressalCreek(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0733501601");
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

function Heathber(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0606744025");
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

function StPlympside(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2621544733");
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

function Lowtra(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=0534597016");
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

function ChettbouAuxDersting(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=7247489857");
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

function Bucktim(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=6710850298");
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

function NtibranLake(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=9312138770");
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
function Warflin(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=5915383379");
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
export {Perthby,Nesbridge,KennticEnd,PressalCreek,Heathber,StPlympside,Lowtra,ChettbouAuxDersting,Bucktim,NtibranLake,Warflin}