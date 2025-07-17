import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
//import ProductCard from './components/productCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/admin'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
     <div>
      <Toaster position='top-right' />
     

     <Routes path="/*">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path ="/*" element ={<h1>404 page not found</h1>} />
        

     </Routes>
    
     </div>
      </BrowserRouter>
  )
}

export default App
