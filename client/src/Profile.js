import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";
import { Context } from "./Components/Context";
import { useContext, useEffect } from "react";
import { PageWrapper } from "./GlobalStyles";
import Loading from "./Components/Loading";
import ActivityTab from "./Components/ProfileTabs/ActivityTab";
import FriendsTab from "./Components/ProfileTabs/FriendsTab";
import SoundcloudTab from "./Components/ProfileTabs/SoundcloudTab";
import YoutubeTab from "./Components/ProfileTabs/YoutubeTab";
import StoreTab from "./Components/ProfileTabs/StoreTab";

const Profile = () => {
    const { profileId } = useParams();
    const {chat, setTitle, setProfileData, profileData, loading, tabState, setTabState, authUrl } = useContext(Context);
    setTitle("Profile");

    useEffect(() => {
        let fetchurl = "/api/get-user/" + profileId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setProfileData(data.data);
                console.log(data.data);
                console.log(tabState);
            }
            else {
                console.log("no data!");
            }
        })
    },[profileId])

    const handleTab = (e) => {
        setTabState(e.target.value);
    };

    if(!profileData){
        return (<Loading />)
    } else {
        
    console.log(profileData);

    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <ProfileWrapper>
            <AvatarWrapper><Avatar src={profileData.avatar} /></AvatarWrapper>
            <ProfileCol>
            <ProfileUserName>{profileData.username}</ProfileUserName>
            <ProfileRow>
            <ProfileStatus>{profileData.description}</ProfileStatus>
            
            </ProfileRow>
            </ProfileCol>
            {
                authUrl === profileId && (
                    <EditProfileButton to="/edit-profile">Edit Profile!</EditProfileButton>
                )
            }
        </ProfileWrapper>
        
        <TagBoxWrapper>
            <TagBox>Joined: {profileData.joindate}</TagBox>
        </TagBoxWrapper>
        <TabWrapper>
            <Tabs>
                <TabButton value="activity" onClick={(e) => handleTab(e)}>Activity</TabButton>
                <TabButton value="friends" onClick={handleTab}>Friends</TabButton>
                <TabButton value="soundcloud" onClick={handleTab}>Soundcloud</TabButton>
                <TabButton value="youtube" onClick={handleTab}>Youtube</TabButton>
                <TabButton value="store" onClick={handleTab}>Store</TabButton>
                </Tabs>
        </TabWrapper>
        <LowerWrapper>
            <LowerInnerWrapper>
                {
                    tabState === "activity" ? (<ActivityTab />) :
                    tabState === "friends" ? (<FriendsTab />) :
                    tabState === "soundcloud" ? (<SoundcloudTab />) :
                    tabState === "youtube" ? (<YoutubeTab />) :
                    tabState === "store" ? (<StoreTab />)
                    : <></>
                }
                </LowerInnerWrapper>
            </LowerWrapper>
            </PageWrapper>
        </Wrapper>
    )
    }
}

export default Profile;



const EditProfileButton = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 120px;
height: 40px;
background-color: black;
text-decoration: none;
color: #0f0;
border-style: solid;
border-width: 1px;
border-color: green;
`

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
background-color: #333;
width: 100%;
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