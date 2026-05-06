import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (

    <div className='fixed top-0 left-0 z-50 w-full  flex px-10 py-8 justify-between items-center '>
      <div className="logo font-[fmedium] text-3xl">
        significo
      </div>

      <div className="items items-center flex gap-3 text-[0.8rem]  ">
        <Link to="/solutions"  className="item hover:underline">Solutions</Link>
        <Link to="/about"  className="item hover:underline">About</Link>
        <Link to="/insights"  className="item hover:underline">Insights</Link>
        <Link to="/team"  className="item hover:underline">Team</Link>
        <Link to="/careers"  className="item hover:underline">Careers</Link>

        
        <div className="btn text-black px-5 py-2 bg-[#F5F19C] rounded-xl">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar
