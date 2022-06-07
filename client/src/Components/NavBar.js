import styled from "styled-components";
import { Wrapper } from "./GlobalStyles";
import { FiSearch, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState, setState, useContext } from "react";
import { Context } from "./Context";

const NavBar = () => {

    const {chat, setChat} = useContext(Context);

    const chatHandler = () => {
        if(chat){
            setChat(false);
            console.log("Closing chat!")
        } else {
            setChat(true);
            console.log("Opening chat!")
        }
    }

    return(
        
            <ChatWrap>
        <NavWrap>
            <NLink to="/home"><div>Beatclash</div></NLink>
            <ChatButton onClick={chatHandler}>
                <ChatIcon />
            </ChatButton>
            <SearchWrapper>
            <SearchBar />
            <SearchButton>
                <SearchIcon></SearchIcon>
            </SearchButton>
            </SearchWrapper>
        </NavWrap>
        <NavBottom>
            <TabColumn>
                <TabTitle>Navigation</TabTitle>
            <TabRow>
            <NLink2 to="/posts">My Posts</NLink2>
            <NLink2 to="/profile/:profileId">Profile</NLink2>
            <NLink2 to="/friends">Friends</NLink2>
            </TabRow>
            </TabColumn>
            <TabColumn>
                <TabTitle>Information</TabTitle>
            <TabRow>
            <NLink2 to="/news">News</NLink2>
            <NLink2 to="/about">About</NLink2>
            <NLink2 to="/rules">Rules</NLink2>
            <NLink2 to="/faq">FAQ</NLink2>
            </TabRow>
            </TabColumn>
        </NavBottom>
        {
            chat ? <ChatWindow /> : <div/>
        }
        </ChatWrap>
        
        
    )
}



export default NavBar;

const ChatWrap = styled.div`
display: flex;
position: fixed;
top: 0;
flex-direction: column;
z-index: 9001;
`

const ChatWindow = styled.div`
width: 100%;
height: 200px;
background-color: #113;
z-index: 1;
`

const ChatButton = styled.button`
position: absolute;
top: 10px;
left: calc(50% - 50px);
width: 100px;
height: 50px;
border:none;
background-color: transparent;
outline:none;
`

const ChatIcon = styled(FiMessageSquare)`
width: 100%;
height: 100%;
color: darkred;
background-color: #222;
border-color: darkred;
border-width: 4px;
border-style: solid;
border-radius: 12px;

&&:hover{
background-color: #111;
color: gold;
cursor: pointer;
}
`

const TabTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #111;
color: gold;
font-size: 19px;
font-weight: 600;
width: 50%;
`

const TabColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TabRow = styled.div`
display: flex;
flex-direction: row;
`

const NLink2 = styled(NavLink)`
margin: 0 2px 0 2px;
padding: 0 16px 6px 16px;
height: 50%;
text-decoration: none;
background-color: #222;
color: red;
border-radius: 5px 5px 0 0;

&&:hover {
    background-color: #111;
    color: gold;
}
`

const NavBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-end;
width: 100%;
height: 30px;
background-color: #111;
`


const SearchIcon = styled(FiSearch)`
width: 100%;
height: 100%;
color: darkred;
background-color: #222;

&&:hover{
background-color: #111;
color: gold;
cursor: pointer;
}
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
font-size: 32px;
color: white;
text-decoration: none;

&&:hover{
color: gold;
cursor: pointer;
}
`

const SearchButton = styled.button`
width: 80px;
height: 150%;
border:none;
background-color:transparent;
outline:none;
`

const NavWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 40px;
padding: 6px 32px 6px 32px;
background-color: var(--primary-color);
color: lightgray;
border-color: var(--accent-bg-color);
border-style: solid;
border-width: 4px;
border-top: 0;
border-left: 0;
border-right: 0;
`