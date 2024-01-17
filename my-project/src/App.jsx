import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import CreateJob from './Pages/CreateJob'
import MyJobs from './Pages/MyJobs'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/post-job' element={<CreateJob/>}/>
    <Route path='/my-job' element={<MyJobs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



