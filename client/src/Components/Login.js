import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

// This will be the login button
// It will be on the nav bar
// when the user isn't logged in

const Login = () => {
    const {chat} = useContext(Context);
    return(
        <Wrapper chat={chat}>
            <LoginButton>Sign up</LoginButton>
        <LoginButton>Login</LoginButton>
        </Wrapper>
    )
}

export default Login;

const LoginButton = styled.button`
width: 120px;
height: 100%;
background-color: black;
color: white;
border-style: solid;
border-width: 1px;
border-color: gold;

&&:hover {
    background-color: #333;
    color: gold
}
`

const Wrapper = styled.div`
position: absolute;
top: 73px;
right: 22px;
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 40px;
`