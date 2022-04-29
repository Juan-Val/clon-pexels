import React, { useState } from 'react'
import svg from '../img/pexels-seeklogo.com.svg';

export const Header = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{ 
    toggle == true ? setToggle(false) : setToggle(true) ;
  }


  return (
    <div className='flex justify-between bg-gray-800 fixed w-full z-50 items-center'>
      
     <img src={svg} alt="" className='w-12 m-4'/>
     <h3 className='text-2xl text-white'>Clon Pexels</h3>
     <i className='bx bx-menu text-5xl m-4 hover:cursor-pointer text-white' id="toggle" onClick={handleToggle}></i>
    <ul className= {toggle === true ? 'absolute  flex-col w-full min-h-full mt-16  text-4xl text-center  bg-gray-800 text-white ease-in duration-500 ' : 'hidden'} >
      <li className='leading-loose'>Opción 1</li>
      <li className='leading-loose'>Opción 2</li>
      <li className='leading-loose'>Opción 3</li>
    </ul>
    </div>
  )
}
