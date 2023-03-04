import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Service from './components/Service'
import Feedback from './components/Feedback'
import ProductId from './components/ProductId'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/contact' element={<Contact />}>
        <Route path='feedback' element={<Feedback />}>
          <Route path=':productid' element={<ProductId />} />
        </Route>
        <Route path='service' element={<Service />} />
      </Route>
    </Routes>
  )
}

export default App