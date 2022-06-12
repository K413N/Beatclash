import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import GlobalStyles from "../GlobalStyles";

const NewReply = () => {
    return(
        <Wrapper>
            <InputField placeholder="Write your Reply here!"></InputField>
            <NewReplyBottom>
                <ReplyButton>Reply!</ReplyButton>
            </NewReplyBottom>
    </Wrapper>
    )
}

export default NewReply;

const ReplyButton = styled.button`
width: 120px;
height: 100%;
background-color: #111;
font-size: 22px;
color: white;
border-style: solid;
border-color: gold;
border-width: 1px;

&&:hover {
    background-color: #333;
    color: gold;
}`

const NewReplyBottom = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
height: 40px;
background-color: black;
`

const InputField = styled.textarea`
box-sizing: border-box;
background-color: #222;
color: white;
width: 100%;
height: 100%;
font-size: 22px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #333;
position: relative;
width: 100%;
height: 250px;
padding: 16px;
`