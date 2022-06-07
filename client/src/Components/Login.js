import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

const Login = () => {
    const {chat} = useContext(Context);
    return(
        <Wrapper chat={chat}>
        <div>Login</div>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "290px" : "70px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`