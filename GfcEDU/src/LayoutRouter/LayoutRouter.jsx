import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Plans from '../components/pages/plans/Plans'
import Course from '../components/pages/courses/Course'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function LayoutRouter() {
    return (
        <Router> 
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/services' element={<Plans/>} />
                <Route path='/courses' element={<Course/>} />
            </Routes>
            <Footer />
      </Router>
  )

}

export default LayoutRouter
