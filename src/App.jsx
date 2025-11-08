 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
 import Aboutme from './components/Aboutme'
 import Skills from './components/Skills'
 import Projects from './components/Projects'
 const App = () => {
   return (
     <div>
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><Aboutme/></div>
     <div><Skills/></div>
     <div><Projects/></div>
     </div>
     
   )
 }
 
 export default App