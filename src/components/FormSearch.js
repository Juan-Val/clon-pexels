import React from 'react';


export const FormSearch = ({handleSubmit,searchTerm,handleForm}) => {
  return (
    <div className='w-full mx-auto text-center h-80 bg-teal-900 grid content-center text-white p-5 text-left'>
      <p className=' text-lg lg:text-3xl'>Las mejores fotos de stock gratis, imágenes libres de regalías y vídeos compartidos por creadores.</p>
    <form action="" onSubmit={handleSubmit} className='mt-4'>
    <input type="text" className='p-2 rounded-md text-black w-3/5 text-lg lg:text-2xl lg:p-4' placeholder="Buscar" name="searchTerm" id="searchTerm" value={searchTerm} onChange={handleForm}/>
      <button type="submit" className=' bg-white text-black p-2  border-none rounded-md text-xl ml-2'>Buscar</button>
     </form>
    </div>
  )
}
