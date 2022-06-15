import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext, useEffect } from "react";
import UserCard from "./Components/UserCard";
import { PageWrapper } from "./GlobalStyles";
import Loading from "./Components/Loading";
import { User } from "@auth0/auth0-react";

const UserPage = () => {
    const {chat, setTitle, setAllUsers, allUsers} = useContext(Context);
    setTitle("Users");

    useEffect(() => {
        fetch("/api/get-users")
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setAllUsers(data.data);
            } else {
                console.log("no data!");
            }
        })
    },[])

    if(!allUsers){
        return(<Loading />)
    }

    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <UserCardWrapper>
                {
                        allUsers.map(element => (
                            <>
                            <UserCard userId={element} />
                            </>
                        ))
                    }
        </UserCardWrapper>
        <BottomPad />

        </PageWrapper>
        </Wrapper>
    )
}

export default UserPage;

const UserCardWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const BottomPad = styled.div`
width: 100%;
height: 44px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
padding: 6px;
`