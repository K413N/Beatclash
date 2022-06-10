import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { Context } from "./Components/Context";
import { useContext } from "react";

const Profile = () => {
    const { profileId } = useParams();
    const {chat, setTitle} = useContext(Context);
    setTitle("Profile");

    return(
        <Wrapper chat={chat}>
        <ProfileWrapper>
            <AvatarWrapper />
            <ProfileCol>
            <ProfileUserName>ProfileUserName</ProfileUserName>
            <ProfileStatus>This is the profile description.</ProfileStatus>
            </ProfileCol>
        </ProfileWrapper>
        <TagBoxWrapper>
            <TagBox>A list of tags will go here.</TagBox>
        </TagBoxWrapper>
        <TabWrapper>
            <Tabs>
                <TabButton>Activity</TabButton>
                <TabButton>Friends</TabButton>
                <TabButton>Soundcloud</TabButton>
                <TabButton>Youtube</TabButton>
                <TabButton>Store</TabButton>
                </Tabs>
        </TabWrapper>
        <LowerWrapper>whatever tab you select will go here</LowerWrapper>
        </Wrapper>
    )
}

export default Profile;

const LowerWrapper = styled.div`
width: 100%;
height: 540px;
background-color: #222;
color: lightblue;
padding: 32px;
`

const TabButton = styled.button`
margin: 0 2px 0 2px;
padding: 0 16px 6px 16px;
height: 100%;
text-decoration: none;
background-color: #222;
color: red;
border-radius: 5px 5px 0 0;
border-width: 1px;
border-style: solid;
border-bottom-width: 0;
border-color: gray;

&&:hover {
    background-color: #333;
    color: gold;
}
`

const Tabs = styled.div`
margin-left: 300px;
`

const TagBox = styled.div`
margin-left: 300px;
color: green;
`

const TabWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: black;
width: 100%;
height: 24px;
`

const TagBoxWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: black;
width: 100%;
height: 40px;
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: white;
`

const ProfileCol = styled.div`
display: flex;
flex-direction: column;
padding: 32px;
`

const ProfileStatus = styled.div`
font-size: 16px;
color: lightgray;
padding: 16px;
`

const ProfileUserName = styled.div`
font-size: 32px;
color: white;
`

const ProfileWrapper = styled.div`
display: flex;
flex-direction: row;
background-image: linear-gradient(to bottom right, darkred, black);
width: 100%;
height: 200px;
padding: 32px;
border-style: solid;
border-width: 1px;
border-color: white;
border-left-width: 0;
border-right-width: 0;
`

const AvatarWrapper = styled.div`
width: 250px;
height: 250px;
background-color: black;
border-style: solid;
border-width: 1px;
border-color: red;
border-radius: 15%;
`

const Wrapper = styled.div`
margin-top: 126px;
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`