import styled from "styled-components";
import { Title } from "./GlobalStyles";
import { Context } from "./Context";
import { useContext } from "react";

const About = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("About");
    return(
        <Wrapper chat={chat}>
        <AboutWrapper>
            <AboutText>This website was made by Kalen.</AboutText>
            <AboutText>
                The idea of this website was to give producers a way to
                collaborate and share content in a more community driven
                environment that is not offered by other audio hosting websites.
            </AboutText>
            <AboutText>
                Please read the rules before submitting a post!
                Other than that, welcome!
            </AboutText>
        </AboutWrapper>
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.div`
margin-top: 126px;
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`

const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 50vw;
`

const AboutText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`