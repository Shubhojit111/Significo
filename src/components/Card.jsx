import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";


const Card = (props) => {
    return (
        <div className="card px-10 py-8 w-[65vh]  bg-white flex items-center justify-between rounded-xl">
            <div className="carddata w-[80%] flex flex-col gap-4">
                <h1 className='font-semibold text-2xl'>{props.heading}</h1>

                <p className=''>{props.text}</p>
            </div>
            <div className="logo  scale-300 ">
                <IoDiamondOutline />
            </div>
        </div>
    )
}

export default Card
