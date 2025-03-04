import styled from "styled-components";
// import {useEffect, useState} from "react";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #262626;
    min-height: 110vh;
`;

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #262626;
    color: #D9E5E5;
    align-items: left;
`;

const Container = styled.section`
    min-height: 110vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    /*For testing*/
    background-color: #262626;
`;

const MainWrapper = styled.div`
    width: 70%;
    align-self: center;
`;

const MainText = styled.p`
    text-decoration: none;
    color: #D9E5E5;
    font-family: 'Sans Serif Collection', sans-serif;
`;

const FooterWrapper = styled.div`
    background-color: #262626;
    color: whitesmoke;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: calc(3px + 3vw);
`;


export function App(){

    return(
        <>
            <PageWrapper>
                <HeaderWrapper>
                    <h1>Andrew Cho</h1>
                    <div id="Logo"><p id = "BU">Boston University Sophomore</p></div>
                </HeaderWrapper>

                <Container>
                    <MainWrapper>



                        <MainText>
                                My name is Andrew Cho,
                                tenacious worker and sophomore of Boston University Computer Science,
                                seeking opportunities for growth. Navigate and overcome challenges effectively.
                                Works effectively between people and thrives in a team environment.
                                Open-minded to new ideas and opinions.
                        </MainText>

                    </MainWrapper>
                </Container>

                <FooterWrapper>
                    <p>All Rights Reserved by Andrew Cho <a href="../credits/credits.html"> Credits</a> &copy;</p>
                </FooterWrapper>

            </PageWrapper>
        </>
    )
}

export default App;
