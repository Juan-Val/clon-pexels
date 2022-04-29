import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='flex flex-wrap container mx-auto '>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
