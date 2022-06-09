import styled from "styled-components";
import { Context } from "./Context";
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
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`