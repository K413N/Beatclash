import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "./GlobalStyles";
import Post from "./Components/Post";
import NewPost from "./Components/NewPost";
import PageBottom from "./Components/PageBottom";

// This will be the page
// for the main post on a board

const Thread = () => {
    const {chat, setTitle} = useContext(Context);
    const { threadTitle } = useParams();
    setTitle(threadTitle);


    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <Post />
        <Post />
        <NewPost />
        <PageBottom />
        <Spacer />
        </PageWrapper>
        </Wrapper>
    )
}

export default Thread;

const Spacer = styled.div`
height: 150px;
width: 100%;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`