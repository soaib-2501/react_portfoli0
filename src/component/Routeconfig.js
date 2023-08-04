import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './Product'
import NavLayout from './NavLayout'
import About from './About'
import Like from './Like'
import Firstcomponent, { Profi } from './Firstcomponent';

export default function Routeconfig() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<NavLayout/>}>
        <Route path='/first' element={<Firstcomponent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/product' element={<Product/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
