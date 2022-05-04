import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import svg from '../img/pexels-seeklogo.png';

export const Header = () => {


  return (
    <div className='flex justify-between bg-gray-800  w-full z-50 items-center'>
      <Link to="/" >
        <img src={svg} alt="pexels" className='w-12 m-4'/>
      </Link>
      <Link to="/">
        <h3 className='text-2xl text-white m-4'>Clon Pexels</h3>
      </Link>
  
    </div>
  )
}
