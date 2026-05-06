import React from 'react'

const Home3 = () => {
    return (
        <div className='home3 h-screen gap-0 w-full flex  text-black '> 

            <div className="slide1 h-full w-full shrink-0 flex justify-center items-center ">
                <h1 className='font-[flight] text-[18vh]  '>Real Talk, <br /> Real Impact</h1>
                 <img className='z-2 rounded-full h-[50vh] w-[50vh] object-cover absolute right-0 translate-x-45' src="https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
           
            <div className="slide2  font-[fmedium] leading-36 relative h-full w-full shrink-0 flex flex-col justify-center items-center">
                <h1 className='text-white text-[20vh] '>69.69M</h1>
                <h1 className='text-[6vh] leading-16 text-center'>Real people — real lives — we have <br /> built products and solutions for.</h1>
                
                <p className=' leading-normal text-lg  h-[18%] w-[16%] absolute top-[20%] left-[15%] '>We’re on a mission to impact as many lives as possible and build a better company while we do it. Here’s our progress.</p>
            </div>

            <div className="slide3   font-[fmedium] leading-36 relative h-full w-full shrink-0 flex flex-col justify-center items-center">
                <h1 className='text-white text-[20vh]'>43%</h1>
                <h1 className='text-[6vh] leading-16 text-center'>Expert Women in Tech.</h1>
                
                <p className=' leading-normal text-lg  h-[18%] w-[16%] absolute top-[25%] left-[20%] '>Our team is global and diverse, because our individual experiences make us stronger..</p>
            </div>
            
            <div className="slide4   font-[fmedium] leading-36 relative h-full w-full shrink-0 flex flex-col justify-center items-center">
                <h1 className='text-white text-[20vh]'>69</h1>
                <h1 className='text-[6vh] w-[60%] leading-16 text-center'>Nationalities Represented on Our Team.</h1>
                
            </div>

        </div>
        


    )
}

export default Home3
