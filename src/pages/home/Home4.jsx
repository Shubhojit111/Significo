import React from 'react'

const Home4 = () => {
  return (
    <div className=' h-[300vh] w-full bg-[#FFFFFF] flex text-xl relative text-black text-[3.5vh] font-semibold text-center'>

      <div className="left4 h-fit  w-1/2 flex flex-col gap-20 justify-between items-center px-20 py-10   absolute left-0 top-[30vh]">
        <p className='leftpara4 leading-10 text-[#2544EE] w-[90%]'>Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally. I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own.</p>
        <div className="employee flex flex-col items-center gap-1.5">
        <img className='rounded-full h-[16vh] w-[16vh]' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e5_MirandaErnst.jpeg" alt="" />
        <h1>Emek Altun</h1>
        <h1>Product Manager @HealthCheck360</h1>
        </div>
      </div>
 
       <div className=" right4   w-1/2 flex flex-col gap-20 justify-between items-center px-20 pb-10 h-fit  absolute right-0 top-[130vh]">
        <p className='rightpara4 leading-10 text-[#704B98] w-[90%]'>Working with Significo and recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism, making a significant impact on their workforce's well-being. We highly recommend Significo to any organization looking to optimize their occupational health and drive positive change. </p>
        <div className="employee flex flex-col items-center gap-1.5">
        <img className='rounded-full h-[16vh] w-[16vh]' src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg" alt="" />
        <h1>Emek Altun</h1>
        <h1>CEO @Vitaservices</h1>
        </div> 
      </div>
      

    </div>
  )
}

export default Home4
