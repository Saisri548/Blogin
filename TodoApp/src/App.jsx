import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import LandingPage from './components/LandingPage'
import Write from './pages/write'
import BlogForm from './pages/BlogForm'
import Login from './pages/Login'
import Signup from './pages/Signup'
import "./index.css"

const App = () => {
  return (
   
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/BlogForm" element={<BlogForm/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/Login" element={<Login/>}/>
       <Route path="/Signup" element={<Signup/>}/>
     </Routes>
  
  )
}

export default App
