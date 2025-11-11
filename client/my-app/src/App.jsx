import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const[message,setMessage]= useState("");
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get("http://localhost:4000/test");
      if(!response) alert("unable to fetch data");
      setMessage(response.data.message);
    }
    fetchData();
  },[])
  return (
    <div>
      <h1>Hello this is react app , testing ...</h1>
      {message && <h3>{message}</h3>}
    </div>
  )
}

export default App
