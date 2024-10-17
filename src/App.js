import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const myId = process.env.REACT_APP_APPID
  const myURL = process.env.REACT_APP_URL

  const[city, setCity] = useState('')
  const[data, setData] =  useState({})

  useEffect(()=>{

  },[data])

  const handleClick =()=>{
    let searchCity = city
    const fetchData = async()=>{
      try {
        const response = await fetch(myURL+searchCity+myId)
        const result = await response.json()
        setData({...result})     
        console.log(result)    
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
    parseObject();
  }

  const parseObject = ()=>{
    if (data.cod === 200){
      console.log(data.weather)
    }
    // console.log(data.cod)
  }


  return (
    <div className="App">
      <div>
      <input type='text' onChange={(e)=>setCity(e.target.value)}></input> 
      <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}

export default App;
