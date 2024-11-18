import React from 'react'
import About from './View/About'
import Contact from './View/Contact'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";


// import Meals from './View/Meals'
// import MealsPlans from './View/MealsPlans'

export default function App() {
  return (
   
     <Router>
      <Routes>
      {/* <Meals></Meals>
      <MealsPlans></MealsPlans> */}
      {/* <About></About>
      <Contact></Contact> */}
      <Route Path="/" element={<About/>}/>
      <Route Path="/Contact" element={<Contact/>}/>
    
    </Routes>
    </Router>
  )
}
