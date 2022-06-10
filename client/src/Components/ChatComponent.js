import styled from "styled-components";
import { Wrapper, Title } from "../GlobalStyles"
import { FiSearch, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState, setState, useContext } from "react";
import { Context } from "./Context";

const ChatComponent = () => {
    const {chat, setChat, setTitle, title} = useContext(Context);

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
        {
            chat ? <ChatWindow /> : <div/>
        }
        <ChatButton onClick={chatHandler}>
                <ChatIcon />
            </ChatButton>
            </ChatWrap>
    )
}

export default ChatComponent;

const ChatWrap = styled.div`
display: flex;
flex-direction: row;
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
z-index: 1;

&&:hover{
background-color: #333;
color: gold;
cursor: pointer;
}
`

const ChatWindow = styled.div`
position: fixed;
width: 450px;
height: 300px;
bottom: 0;
left: calc(100vw - 555px);
background-color: #113;
border-style: solid;
border-color: white;
border-width: 1px;
z-index: 1;
`

const ChatButton = styled.button`
position: fixed;
width: 80px;
height: 30px;
bottom: 8px;
right: 10px;
border:none;
background-color: transparent;
outline:none;
z-index: 1;
`