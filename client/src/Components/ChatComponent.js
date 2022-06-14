import styled from "styled-components";
import { Wrapper, Title } from "../GlobalStyles"
import { FiSearch, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState, setState, useContext, useEffect, useInsertionEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Context } from "./Context";
import { useAuth0 } from "@auth0/auth0-react";

const ChatComponent = () => {
    const {chat, setChat, setTitle, title} = useContext(Context);
    const { user, isAuthenticated, isLoading } = useAuth0();
    // const socketRef = useRef(null);
    // const socket = io.connect("http://localhost:8080");
    const [chatStateObject, setChatStateObject] = useState({ message: ""});
    const [chatArray, setChatArray] = useState([]);

//   useEffect(()=> {
//     setSocket(io.connect("http://localhost:8080"));
//   },[])

//     socket.on("connect", () => {
//         socket.emit("send-message", { message: "connected!"});
//     })
  

    // const onMessageSubmit = (e) => {
    //     e.preventDefault();
    //     // const {message} = chatStateObject;
    //     socket.emit("send-message", "hello");
    //     setChatStateObject({ message: "" });
    // }

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
            chat ? <ChatWindow>
               
                    <ChatForm>
                        <ChatTitle>Chat</ChatTitle>
                        <ChatFeed>
                            feed goes here
                        </ChatFeed>
                        <BottomWrap>
                            <TextBox 
                            name="message"
                            label="Message" />
                            <SendButton type="submit">Send!</SendButton>
                            </BottomWrap>
                    </ChatForm>
              
            </ChatWindow> : <div/>
        }
        <ChatButton onClick={chatHandler}>
                <ChatIcon />
            </ChatButton>
            </ChatWrap>
    )
}

export default ChatComponent;

const SendButton = styled.button`
background-color: black;
color: #0f0;
border-style: solid;
border-width: 1px;
border-color: #0f0;

width: 80px;
height: 20px;

&&:hover {
    background-color: #333;
}
`

const BottomWrap = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const ChatForm = styled.form`
width: 100%;
height: 100%;
`

const ChatTitle = styled.div`
background-color: black;
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: #0f0;
color: #0f0;
padding: 0;
`

const ChatFeed = styled.div`
width: 100%;
height: 260px;
background-color: #005;
color: #0f0;
`

const TextBox = styled.input`
box-sizing: border-box;
width: 100%;
`

const Chat = styled.div`
width: 100%;
height: 100%;
`

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
display: flex;
justify-content: center;
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