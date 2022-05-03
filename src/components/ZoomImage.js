import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getImage } from '../api/photo';
import axios from "axios";
import fileDownload from 'js-file-download';

export const ZoomImage = () => {

  const params = useParams();
  const [id, setId] = useState(params.id);
  const [newData, setNewData] = useState({})
  const [loading, setLoading] = useState(true);
  /**
   * It's an async function that returns a promise. If the id is empty, it will call the getImage()
   * function, otherwise it will call the getImage(id) function. The response is then assigned to the
   * newData variable.
   */
  const loadImage = async() => {
    const respons =  id === '' ? await getImage() : await getImage(id);
    const newData = respons.data;
    setNewData(newData);
    setLoading(false);
  } 


  useEffect(() => {
    setLoading(true);
    loadImage();
  }, [])
  
/**
 * It takes a URL and a filename, and downloads the file at the URL with the given filename.
 * @param url - The url of the file you want to download.
 * @param filename - The name of the file you want to download.
 */
  const download = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    }).then(res => {
      fileDownload(res.data, filename);
    });
  }


  return (
    <div className='container mx-auto p-5 text-center drop-shadow-lg'>
      <h1 className='text-2xl'>Fotografo: {newData.photographer}</h1>
      <h3 className='text-sm m-2'>{newData.alt}</h3>
      {
        loading ? <h1>Loading...</h1> : 
        <img src={newData.src.original} alt={newData.alt} className='w-full rounded-md'/>
      }
      <p className='text-lg m-2 '>Descargar</p>
      <div>
        <button className='bg-gray-800  hover:bg-gray-900  text-white py-2 px-4 rounded m-2' onClick={() => download(newData.src.original, newData.alt+'.jpg')}>Original</button>
        <button className='bg-gray-800  hover:bg-gray-900  text-white  py-2 px-4 rounded m-2' onClick={() => download(newData.src.large, newData.alt+'.jpg')}>Large</button>
        <button className='bg-gray-800  hover:bg-gray-900  text-white  py-2 px-4 rounded m-2' onClick={() => download(newData.src.medium, newData.alt+'.jpg')}>Medium</button>
      </div>
    </div>
  )
}
