import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='grid grid-cols-2 p-2 space-y-2 '>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
