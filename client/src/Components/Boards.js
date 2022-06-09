import styled from "styled-components";
import { Context } from "./Context";
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
margin-top: ${(props) => (props.chat === true ? "270px" : "70px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`