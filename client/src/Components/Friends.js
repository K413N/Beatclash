import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

const Friends = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Friends");
    return(
        <Wrapper chat={chat}>
        <div>Friends</div>
        </Wrapper>
    )
}

export default Friends;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`