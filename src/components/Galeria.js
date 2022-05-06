import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 content-center p-4 '>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
