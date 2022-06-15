import styled from "styled-components";

// Nothing fancy, just a loading text
// No one wants to load a loader

const FriendsTab = () => {

    return(
        <FriendsTabWrapper>
            <FriendsTabText>FriendsTab</FriendsTabText>
        </FriendsTabWrapper>
    )
};

export default FriendsTab;

const FriendsTabText = styled.div`
background-color: darkblue;
color: white;
font-size: 64px;
padding: 16px;
z-index: 3000;
`

const FriendsTabWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`