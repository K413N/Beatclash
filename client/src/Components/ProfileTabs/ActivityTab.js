import styled from "styled-components";

// Nothing fancy, just a loading text
// No one wants to load a loader

const ActivityTab = () => {

    return(
        <ActivityTabWrapper>
            <ActivityTabText>ActivityTab</ActivityTabText>
        </ActivityTabWrapper>
    )
};

export default ActivityTab;

const ActivityTabText = styled.div`
background-color: darkblue;
color: white;
font-size: 64px;
padding: 16px;
z-index: 3000;
`

const ActivityTabWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`