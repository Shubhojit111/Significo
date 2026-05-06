import React from 'react'

const Teamcards = (props) => {
  return (
    <div className="member flex items-center justify-between h-[18vh] w-[90vw] border-2 border-b-gray-500 border-white px-10 py-10 ">
            <div className='flex gap-10'>
            <h1 className='opacity-40'>{props.id}</h1>
            <h1>{props.name}</h1>
            </div>
            <h2 className='text-2xl'>{props.position}</h2>
            <img className='opacity-0 z-10 absolute left-[40%] rounded-full h-[25vh] object-cover w-[25vh] ' src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
  )
}

export default Teamcards

