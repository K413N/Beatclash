import styled from "styled-components";
import { useContext } from "react";

// This is an individual user element
// it will be rendered when mapping through
// an array of the users

const UserCard = () => {
    return(
        <Wrapper>
            <ProfileImage />
        <FName>Username</FName>
        <ButtonWrapper>
            <TabButton>Profile</TabButton>
            <TabButton>Message</TabButton>
        </ButtonWrapper>
        </Wrapper>
    )
}

export default UserCard;



const TabButton = styled.button`
margin: 0 2px 0 2px;
padding: 0 16px 6px 16px;
height: 100%;
width: 100%;
text-decoration: none;
background-color: #222;
color: red;
border-radius: 5px;
border-width: 1px;
border-style: solid;
border-color: gray;

&&:hover {
    background-color: #333;
    color: gold;
}
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #111;
width: 100%;
padding: 6px;
`

const FName = styled.div`
color: gold;
font-size: 22px;
padding: 16px;
`

const ProfileImage = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: black;
`

const Wrapper = styled.div`
margin: 6px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 200px;
height: 270px;
background-color: #222;
border-style: solid;
border-width: 1px;
border-color: red;
padding: 12px;
`