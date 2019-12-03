import React from 'react'
import './Main.css'
import Header from '../header/Header'
import Content from '../content/Content'
import Navbar from '../navbar/Navbar'

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className='bgContainer'>
        <div className='container'>
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Main
