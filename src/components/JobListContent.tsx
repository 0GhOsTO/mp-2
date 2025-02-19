import JobListPreview from "../JobListPreview.tsx";
import {JobSearch} from "../interfaces/Jobs.ts";
import {useState, useEffect} from "react";

export default function JobListContent() {
    /* [jobs, setJobs] = useState("Will be change");*/
    const [jobSearch, setJobSearch] = useState("");

    useEffect(() => {
        async function getJobLists() {
            const res = await fetch(`https://glassdoor-real-time.p.rapidapi.com/jobs/search?query=Java%20Developer`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key": "fd62331aa4mshb7a57245096420bp1a3100jsnbb722fb9d036",
                        "x-rapidapi-host": "glassdoor-real-time.p.rapidapi.com",
                    },
                });
            const data = await res.json();
            setJobSearch(data.data);
            console.log(data.data)
        }
        getJobLists();
    },[jobSearch]);


    return (
        <div>
            <input type = "string" placeholder="Jobs"
                   value = {jobSearch}
                   onChange = {(e) => setJobSearch(e.target.value)}/>
            <p>Code is Working</p>
            <div>
                {/*{*/}
                {/*    jobSearch.map(job => <JobListPreview jobSearch = {job}/>)*/}
                {/*}*/}
            </div>
        </div>
    )
}
