import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contacts' element={ <Contact/>}/>
    </Routes>
    </div>
  )
}

export default App