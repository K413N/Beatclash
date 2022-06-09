import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

const MyPosts = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("My Posts");
    return(
        <Wrapper chat={chat}>
        <div>My Posts</div>
        </Wrapper>
    )
}

export default MyPosts;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`