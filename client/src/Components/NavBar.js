import styled from "styled-components";
import { Wrapper } from "./GlobalStyles";

const NavBar = () => {
    return(
        <Wrapper>
        <NavWrap>

        </NavWrap>
        </Wrapper>
    )
}

export default NavBar;

const NavWrap = styled.div`
width: 100vw;
height: 60px;
background-color: var(--primary-color);
color: lightgray;
border-color: var(--accent-bg-color);
border-style: solid;
border-width: 4px;
border-top: 0;
border-left: 0;
border-right: 0;
`