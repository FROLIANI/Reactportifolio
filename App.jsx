import { View, Text } from 'react-native'
import React from 'react' 
import navbar from './components/navbar'
import "./App.css"

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './Pages/Home/home'
import About from './Pages/Home/About/about'
import Contact from './Pages/Home/Contact/contact'
import Portifolio from './Pages/Home/Portifolio/portifolio'



export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element ={<Home/>} />
      <Route path='About' element = {<About/>}/>
      <Route path='Contact' element = {<Contact/>}/>
      <Route path='Portifolio' element = {<Portifolio/>}/>

    </Routes>
    </BrowserRouter>
  )
}