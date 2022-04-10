import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

import Info from './components/Info'
import Footer from './components/Footer'
import Interest from './components/Interets'
import About from './components/About'

ReactDOM.render(
  <div className='container'>
    <Info />
    <About />
    <Interest />
    <Footer />
  </div>,
  document.getElementById('root')
)
