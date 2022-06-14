import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import Friend from "./Components/Friend";
import { PageWrapper } from "./GlobalStyles";

const Friends = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Users");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <FriendWrapper>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        </FriendWrapper>
        <BottomPad />

        </PageWrapper>
        </Wrapper>
    )
}

export default Friends;

const FriendWrapper = styled.div`
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