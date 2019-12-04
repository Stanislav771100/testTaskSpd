import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className='bg-container'>
        <div className='container'>
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Main
