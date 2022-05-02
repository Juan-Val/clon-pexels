import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Image = ({data}) => {

  

  const urlLarge = data.src.original;
  const urlMedium = data.src.large2x;
  const urlSmall = data.src.medium;
  const name = data.alt+'.jpg';


  

  return (
    <div className='w-44 ' >
      <Link to={`image/${data.id}`}>
        <img src={urlMedium} alt={data.alt} />
      </Link>
    </div>
  )
}
