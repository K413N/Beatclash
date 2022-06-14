import styled from "styled-components";
import { Context } from "./Context";
import { useContext, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import { useHistory, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NewReply = () => {
    let history = useHistory();
    const [formBody, setFormBody] = useState(null);
    const { boardId, threadId } = useParams();
    const [threadUrl, setThreadUrl] = useState(null);
    const { user, isAuthenticated, isLoading, nickname, user_id } = useAuth0();

    const { singleThreadData, setSingleThreadData, setHasData, hasData } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit clicked!");

        let formIsComplete = false;
        if(formBody){
            formIsComplete = true;
        }

        let fetchurl = "/api/create-reply/" + boardId + "/" + threadId

        if(formIsComplete){

            fetch(fetchurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
            },
            body: JSON.stringify({
                userId: user_id,
                username: nickname,
                body: formBody
            })
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            // setThreadUrl(data.data._id);
            // history(boardId + "/" + data.data._id);
            // setSingleThreadData({...singleThreadData});
            let fetchurl = "/api/get-thread/" + boardId + "/" + threadId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                console.log(data.data);
                setSingleThreadData(data.data);
                setHasData(true);
            } else {
                setHasData(false);
                console.log("no data!");
            }
        })
        })

        
        
    }
}

    return(
        <Wrapper onSubmit={handleSubmit}>
            <InputField onChange={(event) => setFormBody(event.target.value)} placeholder="Write your Reply here!"></InputField>
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

const Wrapper = styled.form`
display: flex;
flex-direction: column;
background-color: #333;
position: relative;
width: 100%;
height: 250px;
padding: 16px;
`