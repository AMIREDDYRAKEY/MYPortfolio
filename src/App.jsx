 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
 import Aboutme from './components/Aboutme'
 const App = () => {
   return (
     <div>
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><Aboutme/></div>
     </div>
     
   )
 }
 
 export default App