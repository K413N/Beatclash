import styled from "styled-components";

// Nothing fancy, just a StoreTab text
// No one wants to load a loader

const StoreTab = () => {

    return(
        <StoreTabWrapper>
            <StoreTabText>StoreTab</StoreTabText>
        </StoreTabWrapper>
    )
};

export default StoreTab;

const StoreTabText = styled.div`
background-color: darkblue;
color: white;
font-size: 64px;
padding: 16px;
z-index: 3000;
`

const StoreTabWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`