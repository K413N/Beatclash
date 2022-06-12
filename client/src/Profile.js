import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { PageWrapper } from "./GlobalStyles";

const Profile = () => {
    const { profileId } = useParams();
    const {chat, setTitle} = useContext(Context);
    setTitle("Profile");

    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <ProfileWrapper>
            <AvatarWrapper><Avatar src="https://images.unsplash.com/photo-1602848596718-45693ff58c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80" /></AvatarWrapper>
            <ProfileCol>
            <ProfileUserName>ProfileUserName</ProfileUserName>
            <ProfileRow>
            <ProfileStatus>Short profile descriptions will be here.</ProfileStatus>
            <JoinDate>Joined: DD/MM/YYYY</JoinDate>
            </ProfileRow>
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
        <LowerWrapper>
            <LowerInnerWrapper>whatever tab you select will go here</LowerInnerWrapper>
            </LowerWrapper>
            </PageWrapper>
        </Wrapper>
    )
}

export default Profile;

const ProfileRow = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`

const JoinDate = styled.div`
width: 0;
font-size: 16px;
color: lightgray;
padding: 16px;
`

const LowerInnerWrapper = styled.div`
width: 50%;
height: 100%;
`

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
width: 50%;
`

const ProfileStatus = styled.div`
height: 130px;
width: 450px;
font-size: 16px;
color: lightgray;
padding: 16px;
word-wrap: break-word;
word-break: break-word;
white-space: normal;
text-overflow: ellipsis;
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

const Avatar = styled.img`
width: 100%;
height: 100%;
border-radius: 15%;
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
display: flex;
justify-content: center;
align-items: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`