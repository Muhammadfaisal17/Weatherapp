import './App.css';
import {useState, useEffect} from "react";
 
function App() {
  const [apiData, setApiData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`;
  
 
useEffect(() => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data));
}, [apiUrl]);
console.log(apiData)
  return (

<div style={{textAlign:"center"}}>
<div className="card" style={{display:"inline-block",width:"200px",border:"1px solid black",textAlign:"center",margin:"7px"}} >
<p style={{textAlign:"center"}}><b>Weather(id):</b> {apiData.weather.id}</p>
<p style={{textAlign:"center"}}><b>Weather(main):</b> {apiData.weather.main}</p>
<p style={{textAlign:"center"}}><b>Weather(clouds):</b> {apiData.weather.Clouds}</p>
<p style={{textAlign:"center"}}><b>Weather(description):</b> {apiData.weather.description}</p>
<p style={{textAlign:"center"}}><b>Weather(overcast):</b> {apiData.weather.overcast}</p>


   </div> 
 </div>  

)
} 

export default App;
