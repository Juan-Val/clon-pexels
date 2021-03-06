import {  useEffect, useState } from "react";
import { getPexels } from "./api/pexels";
import { FormSearch } from "./components/FormSearch";
import { Galeria } from "./components/Galeria";
import { Loagding } from "./components/Loading";
import './index.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadImages = async() => {
    const respons = searchTerm === '' ? await getPexels() : await getPexels(searchTerm);
    const newData = respons.data.photos;
    setData(newData);
    setLoading(false);
  } 

  

/**
 * The handleSubmit function is called when the form is submitted. It prevents the default action of
 * the form, which is to reload the page, and then calls the loadImages function
 * @param e - the event object
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    loadImages();
    setLoading(true);
    setSearchTerm('');
  }



  const handleForm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
   
  }

  useEffect(() => {
    loadImages();
  }, [])
  

  return (
    <div className="w-full mx-auto ">
     <FormSearch 
     handleForm={handleForm}
     handleSubmit={handleSubmit}
     searchTerm={searchTerm}
     />
      {loading ? <Loagding /> : <Galeria data={data} />}
    </div>
  );
}

export default App;
