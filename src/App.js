import {  useEffect, useState } from "react";
import { getPexels } from "./api/pexels";
import { Barra } from "./components/Barra";
import { FormSearch } from "./components/FormSearch";
import { Galeria } from "./components/Galeria";
import './index.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);

  const loadImages = async() => {
    const respons = searchTerm === '' ? await getPexels() : await getPexels(searchTerm);
    const newData = respons.data.photos;
    setData(newData);
  } 

  

  const handleClick = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value);
    console.log(searchTerm)
    loadImages();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loadImages();
    setSearchTerm('');
  }



  const handleForm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
   
  }

  useEffect(() => {
    loadImages();
  }, [data])
  

  return (
    <div className="w-full mx-auto">
     <FormSearch 
     handleForm={handleForm}
     handleSubmit={handleSubmit}
     searchTerm={searchTerm}
     />
     <Barra handleClick={handleClick}/>
    <Galeria data={data}/> 
    </div>
  );
}

export default App;
