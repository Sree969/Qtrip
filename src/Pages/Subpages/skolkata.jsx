import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import '../Bangalore.css'

function Thton(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8318638903");
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

function GrandRubouDuWagten(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=3936107807");
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
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8632343612");
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

function NorthGelgoon(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2629332143");
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

function LaLakechiWithLipentage(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=2212680653");
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

function AnnvirInIngsaukLake(){
    let [state,setState]=useState([])
    useEffect(()=>{
        let api=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=1157691488");
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

export {Thton,GrandRubouDuWagten,Nesbridge,NorthGelgoon,LaLakechiWithLipentage,AnnvirInIngsaukLake}