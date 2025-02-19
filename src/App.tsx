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
    const [weather, setWeather] = useState<Weather[]>([]);
    const URL = `http://api.weatherapi.com/v1/current.json?key=c96911959eb34ef099551938251902&q=London&aqi=no`;

    useEffect(() => {
        async function getWeather(): Promise<void> {
            const rawData = await fetch(URL);
            const data = await rawData.json();
            console.log("#####data:", data);
            const weatherList: Weather[] = [{
                country: data.location.country,
                time: data.location.localtime,
                icon: data.current.condition.icon,
                cloud: data.current.cloud.toString(),
                humidity: data.current.humidity.toString(),
                wind: data.current.wind_mph.toString()
            }];
            console.log("WeatherList: ", weatherList);
            setWeather(weatherList);
        }
        getWeather()
            .then(()=> console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <WeatherContent data={weather}/>
        </ParentDiv>
    )
}

export default App;