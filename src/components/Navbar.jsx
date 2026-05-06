import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CylinderButton from './CylinderButton'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 left-0 z-50 w-full flex px-10 py-8 justify-between items-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="logo font-[fmedium] text-3xl">
        significo
      </div>

      <div className="items items-center flex gap-5 text-[15px]  ">
        <Link to="/solutions"  className="item hover:underline"><CylinderButton text="Solutions" /></Link>
        <Link to="/about"  className="item hover:underline"><CylinderButton text="About" /></Link>
        <Link to="/insights"  className="item hover:underline"><CylinderButton text="Insights" /></Link>
        <Link to="/team"  className="item hover:underline"><CylinderButton text="Team" /></Link>
        <Link to="/careers"  className="item hover:underline"><CylinderButton text="Careers" /></Link>

        
        <div className="btn text-black px-5 py-2 bg-[#F5F19C] rounded-xl">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar
