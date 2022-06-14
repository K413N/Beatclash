import styled from "styled-components";
import { Context } from "./Context";
import { useContext, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams, useHistory } from "react-router-dom";


const NewThread = () => {
    let history = useHistory();
    const [formBody, setFormBody] = useState(null);
    const [formTitle, setFormTitle] = useState(null);
    const [threadUrl, setThreadUrl] = useState(null);
    const { user, isAuthenticated, isLoading, nickname } = useAuth0();
    console.log(user);
    const { boardId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit clicked!");

        let formIsComplete = false;
        if(formTitle !== null && formBody !== null) {
            formIsComplete = true;
        } else {
            formIsComplete = false;
        }

        if(formIsComplete){
            const formObj = { formBody, formTitle, nickname };

            fetch("/api/create-thread/" + boardId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    op: user.nickname,
                    threadTitle: formTitle,
                    body: formBody
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.data);
                setThreadUrl("/" + data.data._id);
            })

            // this garbage isn't working
            history.push(threadUrl);
        }

    }

    return(
        <Wrapper onSubmit={handleSubmit}>
            <TitleField onChange={(event) => setFormTitle(event.target.value)} placeholder="Write your title here!" required />
            <InputField onChange={(event) => setFormBody(event.target.value)} placeholder="Everything in your thread goes here!" required />
            <NewThreadBottom>
                <ThreadButton type="submit">Create Thread!</ThreadButton>
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

const Wrapper = styled.form`
display: flex;
flex-direction: column;
background-color: #333;
position: relative;
width: 100%;
height: 600px;
padding: 16px;
`