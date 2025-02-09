import { useEffect, useState } from "react";

const ServerData = () => {
  const [serverData, setServerData] = useState(null);

  const fetchFortnite = async () => {
    const url = 'https://fortnite-api.com/v2/news';

    try {
      const data = await fetch(url);
      if(!data.ok) throw new Error(`Response status: ${response.status}`)
      // console.log('data:', data);
      const response = await data.json();
      // console.log('response:', response);
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

  return (
    <div>
      {serverData.map(entry => (
        <div className='serverContainer' key={entry.id}>
          <h1 className='title'>{entry.title}</h1>
          <h2 className='body'>{entry.body}</h2>
          <img className='img' src={entry.image} alt={entry.title} />
        </div>
      ))}
    </div>
  )
};


export default ServerData;
