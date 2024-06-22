import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import { AuthProvider } from './auth/authcontext'
import Hero from './pages/hero'
import Enterdetailsorg from './pages/organizationlogin'
import Enterdetailslib from './pages/librarianlogin'


const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
    <div className=" min-h-80">
    <Routes>
      <Route path="/librarianlogin" element={<Enterdetailslib/>}/>
      <Route path="/organizationlogin" element={<Enterdetailsorg/>}/>
      <Route path="/" element={<Hero/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
