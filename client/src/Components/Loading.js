import styled from "styled-components";

// Nothing fancy, just a loading text
// No one wants to load a loader

const Loading = () => {

    return(
        <LoadingWrapper>
            <LoadingText>Loading</LoadingText>
        </LoadingWrapper>
    )
};

export default Loading;

const LoadingText = styled.div`
background-color: darkblue;
color: white;
font-size: 64px;
padding: 16px;
z-index: 3000;
`

const LoadingWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 150px;
width: 100%;
height: 100%;
`