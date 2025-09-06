import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import MainContent from '../Components/MainContent'

const Home = () => {
  return (
    <div className='flex flex-col justify-between'>
     <MainContent/>
     <Footer/>
     </div>
   
  )
}

export default Home