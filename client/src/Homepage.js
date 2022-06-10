import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";

const Forums = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Forums");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
            <InnerWrapper>
                <PHText>Create a list of drop down menues revealing board components here</PHText>
            </InnerWrapper>
            <BottomPad />
            </PageWrapper>
        </Wrapper>
    )
}

export default Forums;
const PHText = styled.div`
color: white;
`

const BottomPad = styled.div`
width: 100%;
height: 44px;
`

const InnerWrapper = styled.div`
width: 70%;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 126px;
background-color: #111;
position: relative;
width: 100%;
height: 100%;
`