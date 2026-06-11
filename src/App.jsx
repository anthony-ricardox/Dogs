import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import { UseStorage } from './useContext'

const App = () => {
  return (
    <div>
      <UseStorage>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login/*' element={<Login/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </UseStorage>
    </div>
  )
}

export default App
