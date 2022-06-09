import styled from "styled-components";
import { Title } from "./GlobalStyles";
import { Context } from "./Context";
import { useContext } from "react";

const Rules = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Rules");
    return(
        <Wrapper chat={chat}>
        <RulesWrapper>
            <RulesText>Rule 1: Don't upload content that is not yours.</RulesText>
            <RulesText>Rule 2: Don't break the law.</RulesText>
            <RulesText>Rule 3: No NSFW content.</RulesText>
            <RulesText>Rule 4: Respect each other, no racism, sexism, cursing or discrimination.</RulesText>
            <RulesText>Rule 5: Keep posts related to the topic of the board.</RulesText>
        </RulesWrapper>
        </Wrapper>
    )
}

export default Rules;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`

const RulesWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #111;
height: 50vw;
`

const RulesText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`