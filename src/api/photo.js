import axios from "axios";


export const getImage = async ( id) => 
 await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: '563492ad6f91700001000001c79813ab10be4bf6b33f26a2d2c536b9' 
    },
  } );
