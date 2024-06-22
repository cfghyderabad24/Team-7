import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import { AuthProvider } from './auth/authcontext'
import Hero from './pages/hero'
import Enterdetailsorg from './pages/organizationlogin'
import Enterdetailslib from './pages/librarianlogin'
import CheckIn from './pages/checkin'
import Preview from './pages/preview'
import StudentOptions from './pages/studentOptions'
import Analytics from './pages/analytics'
import Returnpage from './pages/return'
import Issueorreturnpage from './pages/existingreturn'
import Registrationpage from './pages/newreg'


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
      <Route path="/checkin" element={<CheckIn/>}/>
      <Route path="/preview" element={<Preview/>}/>
      <Route path="/studentoptions" element={<StudentOptions/>}/>
      <Route path="/return" element={<Returnpage/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/existingreturn" element={<Issueorreturnpage/>}/>
      <Route path="/newreg" element={<Registrationpage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
