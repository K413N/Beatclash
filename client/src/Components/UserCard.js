import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

// This is an individual user element
// it will be rendered when mapping through
// an array of the users

const UserCard = ({userId}) => {
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        fetch("/api/get-user/" + userId)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setCardData(data.data);
                console.log(data.data);
            } else {
                console.log("no data!");
            }
        })
    },[])

    if(!cardData){
        return(<Loading />)
    } else {
        let avatar = "";

        if(!cardData.avatar){
            avatar = "https://images.unsplash.com/photo-1528590005476-4f5a6f2bdd9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
        } else {
            avatar = cardData.avatar;
        }
    return(
        <Wrapper>
            <ProfileImage src={avatar} />
        <FName>{cardData.username}</FName>
        <ButtonWrapper>
            <TabButton to={"/profile/" + cardData._id}>Profile</TabButton>
        </ButtonWrapper>
        </Wrapper>
    )
    }
}

export default UserCard;



const TabButton = styled(NavLink)`
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

const ProfileImage = styled.img`
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