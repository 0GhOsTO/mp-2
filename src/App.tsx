import WeatherContent from './components/WeatherContents.tsx'
import styled from "styled-components";
import {Weather} from "./interfaces/Weather.ts";
import {useEffect, useState} from "react";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export function App(){
    const [inputVal, setInput] = useState("");
    const [weather, setWeather] = useState<Weather[]>([]);

    useEffect(() => {
        async function getWeather(): Promise<void> {
            const rawData = await fetch(`http://api.weatherapi.com/v1/current.json?key=c96911959eb34ef099551938251902&q=${inputVal}`);
            const foreData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c96911959eb34ef099551938251902&q=London&days=5`);

            const data = await rawData.json();
            const forecastData = await foreData.json();
            // console.log("#####data:", data);
            console.log("#####forecastData:", forecastData);
            const weatherList: Weather[] = [{
                city: data.location.name,
                country: data.location.country,
                time: data.location.localtime,
                icon: data.current.condition.icon,
                cloud: data.current.cloud.toString(),
                humidity: data.current.humidity.toString(),
                wind: data.current.wind_mph.toString()
            }];
            // const forecastList:
            // console.log("WeatherList: ", weatherList);
            setWeather(weatherList);
        }
        getWeather()
            .then(()=> console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    },[inputVal]);

    return(
        <div>

            <ParentDiv>
                <input type="string" placeholder="location" value = {inputVal}
                       onChange={(e) => setInput(e.target.value)}/>
                <WeatherContent data={weather}/>
            </ParentDiv>
        </div>
    )
}

export default App;