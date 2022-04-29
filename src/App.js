import {  useEffect, useState } from "react";
import { getPexels } from "./api/pexels";
import { FormSearch } from "./components/FormSearch";
import { Galeria } from "./components/Galeria";
import { Header } from "./components/Header";
import './index.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const loadImages = async() => {
    const respons = searchTerm === '' ? await getPexels() : await getPexels(searchTerm);
    const newData = respons.data.photos;
    setData(newData);

  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    loadImages();
    setSearchTerm('');
  }

  const handleForm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
   
  }

  useEffect(() => {
    loadImages();
  }, [FormSearch])
  

  return (
    <div className="w-full mx-auto">
     <Header/>
     <FormSearch 
     handleForm={handleForm}
     handleSubmit={handleSubmit}
     searchTerm={searchTerm}
     />
     <Galeria 
     data={data}/>
    </div>
  );
}

export default App;
