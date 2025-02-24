// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
