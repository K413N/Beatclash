import styled from "styled-components";
import { Context } from "./Context";
import { useContext, useState } from "react";
import GlobalStyles from "../GlobalStyles";
import { useHistory, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NewReply = () => {
    let history = useHistory();
    const [formBody, setFormBody] = useState(null);
    const [formMediaUrl, setFormMediaUrl] = useState(null);
    const { boardId, threadId } = useParams();
    const [threadUrl, setThreadUrl] = useState(null);
    const { user, isAuthenticated, isLoading, nickname } = useAuth0();

    const { singleThreadData, setSingleThreadData, setHasData, hasData, authUrl } = useContext(Context);

    console.log(authUrl);

    const handleSubmit = (e) => {
        e.preventDefault();

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
                userId: authUrl,
                body: formBody,
                mediaurl: formMediaUrl
            })
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            // setThreadUrl(data.data._id);
            // history(boardId + "/" + data.data._id);
            // setSingleThreadData({...singleThreadData});
            let fetchurl = "/api/get-thread/" + boardId + "/" + threadId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setSingleThreadData(data.data);
                setHasData(true);
            } else {
                setHasData(false);
                console.log("no data!");
            }
        })
        })

        setFormBody("");
        setFormMediaUrl("");
    }
}

    return(
        <Wrapper onSubmit={handleSubmit}>
            <MediaUrl value={formMediaUrl} onChange={(event) => setFormMediaUrl(event.target.value)} placeholder="Paste your media url here!" />
            <InputField value={formBody} onChange={(event) => setFormBody(event.target.value)} placeholder="Write your Reply here!" required></InputField>
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

const MediaUrl = styled.input`
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