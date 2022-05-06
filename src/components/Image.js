import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Image = ({data}) => {

  

  const urlLarge = data.src.original;
  const urlMedium = data.src.large2x;
  const urlSmall = data.src.medium;
  const name = data.alt+'.jpg';


  

  return (
    <div className='min-w-40 m-2 sm:w-72 md:w-11/12 mt-4 md:mt-2 lg:mt-0' >
      <Link to={`image/${data.id}`}>
        <img src={urlMedium} alt={data.alt} className=" rounded-lg h-[80%] md:h-[90%] object-fill"/>
      </Link>
      <h2 className='text-sm'>{data.photographer}</h2>
      <p className='text-xs '>{data.alt}</p>
    </div>
  )
}
