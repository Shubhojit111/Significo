import React from 'react'
import Teamcards from '../../components/Teamcards'

const Home5 = () => {
  return (
    <div className='team font-[flight] bg-white text-black min-h-screen w-full px-12 py-28  '>
      <h1 className='text-6xl text-center mb-15'>Our Team</h1>

      
    <div className="members text-5xl items-center flex flex-col   h-[80%] w-full">
        
        <Teamcards id='01' name="Shubhojit Deb" position="CEO"/>
        <Teamcards id='02' name="Anthony Stark" position="C0O"/>
        <Teamcards id='03' name="Mark Zidan" position="Chief Product Officer"/>
        <Teamcards id='04' name="Shreyan Singh" position="CTO"/>
        <Teamcards id='05' name="Brian Hooda" position="VP of Engineering"/>
      
       
    </div>
      
    </div>
  )
}

export default Home5
