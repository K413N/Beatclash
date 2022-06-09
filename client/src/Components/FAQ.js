import styled from "styled-components";
import { Title } from "./GlobalStyles";
import { Context } from "./Context";
import { useContext } from "react";

const FAQ = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("FAQ");
    return(
        <Wrapper chat={chat}>
        <FAQWrapper>
            <FAQText>There has been no frequently asked questions yet!</FAQText>
           </FAQWrapper>
        </Wrapper>
    )
}

export default FAQ;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`

const FAQWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #111;
height: 50vw;
`

const FAQText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`