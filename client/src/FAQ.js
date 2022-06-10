import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { PageWrapper } from "./GlobalStyles";

// This page will grow as time goes on, 
// and more questions are asked.

const FAQ = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("FAQ");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <FAQWrapper>
            <FAQText>There has been no frequently asked questions yet!</FAQText>
           </FAQWrapper>
           </PageWrapper>
        </Wrapper>
    )
}

export default FAQ;

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`

const FAQWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 40vw;
`

const FAQText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`