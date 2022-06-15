import styled from "styled-components";

// Nothing fancy, just a YoutubeTab text
// No one wants to load a loader

const YoutubeTab = () => {

    return(
        <YoutubeTabWrapper>
            <YoutubeTabText>YoutubeTab</YoutubeTabText>
        </YoutubeTabWrapper>
    )
};

export default YoutubeTab;

const YoutubeTabText = styled.div`
background-color: darkblue;
color: white;
font-size: 64px;
padding: 16px;
z-index: 3000;
`

const YoutubeTabWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`