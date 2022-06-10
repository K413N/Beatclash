import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";

const Posts = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Posts");
    return(
        <Wrapper chat={chat}>
        <div>Posts</div>
        </Wrapper>
    )
}

export default Posts;

const Wrapper = styled.div`
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`