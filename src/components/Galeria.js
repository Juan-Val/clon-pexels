import React from 'react'
import { Image } from './Image';

export const Galeria = ({data}) => {


  return (
    <div className='p-1 md:p-4 masonry-2-col md:masonry-3-col'>
      {data.map(element => 
        <Image key={element.id} data={element}/>
      )}
    </div>
  )
}
