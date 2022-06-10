import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Context } from "./Components/Context";
import { useContext } from "react";

const Homepage = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Home");
    return(<Wrapper><div>hello</div></Wrapper>)
}

export default Homepage;

const Wrapper = styled.div`
margin-top: 126px;
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`
