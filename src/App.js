import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import Contact from './pages/Contact'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project'
import About from './pages/About';


export default function App() {
  return (<>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      
      </Routes>

    </BrowserRouter>


  </>
  )
}
