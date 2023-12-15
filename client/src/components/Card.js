import React from 'react'
import { FaOpencart } from "react-icons/fa";


export default function Card(props) {
    const { id, image, name, category, description, price } = props;
    return (
        <div id={id} className='overflow-hidden rounded-lg shadow-lg flex flex-col' >
            <img className='aspect-square object-cover shadow-lg' src={image} alt={name} />
            <div className='p-3 flex flex-col gap-2 h-full'>
                <h1 className='text-lg'>{name}</h1>
                <h2 className='text-gray-400 border-b-2 text-sm hover:text-pink-300 hover:border-pink-300'>{category}</h2>
                <h3>{description}</h3>
                <p className='mt-auto p-3 text-lg font-light from-pink-300 bg-gradient-to-r text-white rounded-md shadow-sm flex items-center text-center justify-between'>{price}€ <FaOpencart className='hover:text-pink-500 text-pink-300 text-3xl border-l-2 border-pink-100 w-10 pl-2' /></p>
            </div>
        </div>


    )
}
