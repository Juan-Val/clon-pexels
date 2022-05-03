import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='grid  p-4 mx-auto justify-items-stretch grid-cols-2 lg:grid-cols-3'>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
