import axios from "axios";


export const getPexels = async ( searchTerm = "programming") => 
 await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
      Authorization: '563492ad6f91700001000001c79813ab10be4bf6b33f26a2d2c536b9' 
    },
  } );

