import {JobSearch} from "./interfaces/Jobs";
import {styled} from "styled-components";

const JobListPreviewDiv = styled.div`
z
`;

const JobListPreview = ({jobSearch}: {jobSearch: JobSearch}) => {
    return (
        <JobListPreviewDiv>
            <h3>{jobSearch.id}</h3>
            <p>{jobSearch.title}</p>
            <p>{jobSearch.url}</p>
        </JobListPreviewDiv>
    )
}

export default JobListPreview;