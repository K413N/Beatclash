import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

const Posts = () => {
    const {chat} = useContext(Context);
    return(
        <Wrapper chat={chat}>
        <div>Posts</div>
        </Wrapper>
    )
}

export default Posts;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "290px" : "90px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`