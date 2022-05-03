import React from 'react';


export const FormSearch = ({handleSubmit,searchTerm,handleForm}) => {
  return (
    <div className='w-full mx-auto text-center h-80 bg-[url("https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260")] grid content-center text-white font-bold  p-5 text-left '>
      <p className=' text-lg lg:text-3xl'>Las mejores fotos de stock gratis, imágenes libres de regalías y vídeos compartidos por creadores.</p>
    <form action="" onSubmit={handleSubmit} className='mt-4'>
    <input type="text" className='p-2 rounded-md text-black w-3/5 text-lg lg:text-2xl lg:p-4' placeholder="Buscar" name="searchTerm" id="searchTerm" value={searchTerm} onChange={handleForm}/>
      <button type="submit" className='p-2 text-xl  bg-emerald-700 m-2 rounded-md lg:text-2xl lg:p-4'>Buscar</button>
     </form>
    </div>
  )
}
