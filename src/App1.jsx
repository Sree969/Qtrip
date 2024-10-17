import React from 'react';
import Navbar from './Components/Navbar.jsx' 
import Division from "./Components/Division.jsx"
import Content from "./Components/Content.jsx"
import Footer from "./Components/Footer"

class App1 extends React.Component{
  render(){
    return(
      <>
      <Navbar/>
      <Division/>
      <Content/>
      <Footer/>
      </>
    )
  }
}
export default App1;
