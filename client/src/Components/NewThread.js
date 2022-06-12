import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import GlobalStyles from "../GlobalStyles";

const NewThread = () => {
    return(
        <Wrapper>
            <TitleField placeholder="Write your title here!"></TitleField>
            <InputField placeholder="Everything in your thread goes here!"></InputField>
            <NewThreadBottom>
                <ThreadButton>Create Thread!</ThreadButton>
            </NewThreadBottom>
    </Wrapper>
    )
}

export default NewThread;

const ThreadButton = styled.button`
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

const NewThreadBottom = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
height: 80px;
background-color: black;
`

const TitleField = styled.input`
box-sizing: border-box;
background-color: #222;
color: white;
width: 100%;
height: 60px;
font-size: 22px;
z-index: 9001;
`

const InputField = styled.textarea`
box-sizing: border-box;
background-color: #222;
color: white;
width: 100%;
height: 100%;
font-size: 22px;
line-height: inherit;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #333;
position: relative;
width: 100%;
height: 600px;
padding: 16px;
`