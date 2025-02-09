import { useEffect, useState } from "react";

const ServerData = () => {
  const [serverData, setServerData] = useState(null);

  const fetchFortnite = async () => {
    const url = 'https://fortnite-api.com/v2/news';

    try {
      const data = await fetch(url);
      if(!data.ok) throw new Error(`Response status: ${response.status}`)
      console.log('data:', data);
      const response = await data.json();
      console.log('response:', response);
      const array = response.data.br.motds;
      console.log('array:', array);
      setServerData(array);
      // console.log('serverData:', serverData);  // same as 'array'
    } catch (error) {
      console.error(error.message);
    }
  }

useEffect(() => {
  fetchFortnite();
}, []);

if (!serverData) return <h1>No Data To Display</h1>;

// return (


// )


};


export default ServerData;
