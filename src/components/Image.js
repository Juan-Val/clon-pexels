import React, { useState } from 'react'
import axios from "axios";
import fileDownload from 'js-file-download';

export const Image = ({data}) => {

  const download = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    }).then(res => {
      fileDownload(res.data, filename);
    });
  }

  const urlLarge = data.src.original;
  const urlMedium = data.src.large2x;
  const urlSmall = data.src.medium;
  const name = data.alt+'.jpg';

  const [toggle, setToggle] = useState(false);

  const handleToogle = () => { 
    setToggle(!toggle);
  }

  return (
    <div className='m-2 p-2 shadow-lg rounded-xl' >
      <img src={data.src.large} alt={data.alt} />
      <div className='flex justify-between text-base p-2'>
        <div className=''>
          <p>{data.photographer}</p>
        </div>
        <div className='relative transition duration-500 ease-out'>
          <button className='p-2 bg-teal-800 text-white rounded-md  w-24  ' onClick={handleToogle}>Descargar</button>
          <div className={toggle === true ? 'absolute pl-2 bg-teal-800  text-white w-24 rounded-md z-30 mt-2 ' : 'hidden'}>
            <ul>
              <li className='p-1' ><button onClick={() => download(urlLarge,name)}>Large</button></li>
              <li className='p-1'><button onClick={() => download(urlMedium,name)}>Medium</button></li>
              <li className='p-1'><button onClick={() => download(urlSmall,name)}>Small</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
