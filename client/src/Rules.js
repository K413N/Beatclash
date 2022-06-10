import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { PageWrapper } from "./GlobalStyles";

const Rules = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Rules");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <RulesWrapper>
            <RulesText>Rule 1: Do not take credit for content that is not yours.</RulesText>
            <RulesText>Rule 2: Don't break the law.</RulesText>
            <RulesText>Rule 3: No NSFW content.</RulesText>
            <RulesText>Rule 4: Respect each other, no racism, sexism, cursing or discrimination.</RulesText>
            <RulesText>Rule 5: Keep posts related to the topic of the board.</RulesText>
        </RulesWrapper>
        </PageWrapper>
        </Wrapper>
    )
}

export default Rules;

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`

const RulesWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 50vw;
`

const RulesText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`