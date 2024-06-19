import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import {  Contact, Home, Card, ShopPage } from './pages'

const App = () => {
  return (
  <div>
  <Navbar />
  <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/card' element={<Card />} />
   <Route path='/shop' element={<ShopPage />} />
   <Route path='*' element={<Home />} />
  </Routes>
  <Footer /> 
  </div>
  )
}

export default App