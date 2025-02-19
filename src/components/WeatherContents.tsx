import styled from "styled-components";
import {Weather} from "../interfaces/Weather.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;



export default function WeatherContent(props: {data:Weather[]}) {
    /* [jobs, setJobs] = useState("Will be change");*/
    console.log("Weather", props.data)
    return (
        <AllCharsDiv>
            {
                props.data.map((wea: Weather) =>
                    <SingleCharDiv>
                        <p>{wea.country}</p>
                        <h1>{wea.city}</h1>
                        <p>{wea.time}</p>
                        <img src={wea.icon} alt={`image of ${wea.country}`} />
                        <p>{wea.cloud}</p>
                        <p>{wea.humidity}</p>
                        <p>{wea.wind}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}
