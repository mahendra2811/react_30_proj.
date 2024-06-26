import React, { useEffect, useState } from 'react'

export default function Fourteen() {
    const[weather , setWeather] = useState(null);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const apiKey = '2e79e278c8d5c14635570bbb7c9d9111';
                fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data)=>setWeather(data))
                .catch((error) => console.error('Error fetching the weather data:', error));
            })
        }
    },[])
  return (
    <div>
      {/* <h1>hello </h1> */}
      {weather && weather.main ? (
        <div>
            <h2>Current weather</h2>
            <p>Temperature : {weather.main.temp}</p>
            <p>Conditions : {weather.weather[0].description}</p>
            {/* <p>feels like: {weather.main.feels_like}</p>
            <p>temp. Max .: {weather.main.temp_max}</p>
            <p>temp. Min .: {weather.main.temp_min}</p>
            <p></p> */}

        </div>
      ):(
        <p>
            Loading... and finding your weather condition
        </p>
      )}
    </div>
  )
}
