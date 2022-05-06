import React from 'react'

export const Barra = ( {handleClick} ) => {
  return (
    <div className='container  mx-auto p-4 mt-4 sm:p-2'>
      <div className='flex justify-center  sm:intems-left'> 
        <button value="Comida" className='py-1 px-2 bg-gray-700 text-white rounded-md ml-1 hover:bg-gray-900  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110  sm:py-2 sm:px-4 sm:ml-4' onClick={handleClick} >Comida</button>
        <button value="Ciudad" className='py-1 px-2 bg-gray-700 text-white rounded-md ml-1 hover:bg-gray-900  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 sm:py-2 sm:px-4 sm:ml-4' onClick={handleClick} >Ciudad</button>
        <button value="Perros" className='py-1 px-2 bg-gray-700 text-white rounded-md ml-1 hover:bg-gray-900  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 sm:py-2 sm:px-4 sm:ml-4' onClick={handleClick} >Perros</button>
        <button value="Gatos" className='py-1 px-2 bg-gray-700 text-white rounded-md ml-1 hover:bg-gray-900  transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 sm:py-2 sm:px-4 sm:ml-4'  onClick={handleClick}>Gatos</button>
      </div>
    </div>
  )
}
