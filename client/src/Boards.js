import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";

const Boards = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Boards");
    return(
        <Wrapper chat={chat}>
        <div>Boards</div>
        </Wrapper>
    )
}

export default Boards;

const Wrapper = styled.div`
margin-top: 126px;
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`