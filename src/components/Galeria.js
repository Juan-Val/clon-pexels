import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='p-4 masonry-3-col'>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
