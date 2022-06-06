import styled from "styled-components";
import { Wrapper } from "./GlobalStyles";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <Wrapper>
        <NavWrap>
            <NLink to="/"><div>Beatclash</div></NLink>
            <SearchWrapper>
            <SearchBar />
            <SearchButton>
                <ButtonIcon></ButtonIcon>
            </SearchButton>
            </SearchWrapper>
        </NavWrap>
        <NavBottom>
            <NLink2 to="/login">Login</NLink2>
            <NLink2 to="/friends">Friends</NLink2>
            <NLink2 to="/error">Profile</NLink2>
        </NavBottom>
        </Wrapper>
    )
}

export default NavBar;

const NLink2 = styled(NavLink)`
padding: 6px;
text-decoration: none;
color: red;

&&:hover {
    color: gold;
}
`

const NavBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 40px;
background-color: #111;
`

const ButtonIcon = styled(FiSearch)`
width: 100%;
height: 100%;
color: darkred;
background-color: #111;
`

const SearchWrapper = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
float: right;
height: 100%;
`

const SearchBar = styled.input`
width: 250px;
height: 100%;
font-size: 22px;
`

const NLink = styled(NavLink)`
width: 240px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: 60px;
color: white;
text-decoration: none;
`

const SearchButton = styled.button`
width: 80px;
height: 100%;
border:none;
background-color:transparent;
outline:none;

&&:hover{
border-style: solid;
border-width: 4px;
border-color: red;
cursor: pointer;
}
`

const NavWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
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