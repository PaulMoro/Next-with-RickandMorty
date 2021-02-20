import { useState, useEffect } from 'react';
const api = `https://rickandmortyapi.com/api/character/`;
let preApi = {
  info: {
  },
  results: [
    {
      id: 0,
      name: "",
      image: "",
      species: "",
      status: ""
    }
  ]
}


const useGetData = () => {
  

  const [mydata, setData] = useState(preApi);

  useEffect(() => {
    fetch (api)
      .then(response => response.json())
      .then (data => {setData(data)
      console.log(mydata.results[0].name)})
/*       .catch((error) => console.log('error')) */
  }, [])

  return mydata;
}


export default useGetData