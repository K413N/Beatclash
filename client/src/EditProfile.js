import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext, useState } from "react";
import { PageWrapper } from "./GlobalStyles";
import { useHistory } from "react-router-dom";

const EditProfile = () => {
    let history = useHistory();
    const {chat, setTitle, authUrl} = useContext(Context);
    const [formAvatar, setFormAvatar] = useState(null);
    const [formUserName, setFormUsername] = useState(null);
    const [formDescription, setFormDescription] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello!");
        let fetchurl = "/api/update-profile/" + authUrl;

        fetch(fetchurl, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "authUrl": authUrl,
                "username": formUserName,
                "avatar": formAvatar,
                "description": formDescription,
            })
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.data);
            history.push("profile/" + authUrl);

        })
    }

    setTitle("Profile Editor");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <FormWrapper onSubmit={handleSubmit}>
                <InfoText>Paste avatar url</InfoText>
                <InputField onChange={(event) => setFormAvatar(event.target.value)} required />
                <InfoText>Change username</InfoText>
                <InputField onChange={(event) => setFormUsername(event.target.value)} required />
                <InfoText>Edit description</InfoText>
                <InputField onChange={(event) => setFormDescription(event.target.value)} required />
                <UpdateButton type="submit" >Update Profile!</UpdateButton>
                </FormWrapper>
        </PageWrapper>
        </Wrapper>
    )
}

export default EditProfile;

const UpdateButton = styled.button`
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

const FormWrapper = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
`

const InfoText = styled.div`
padding: 6px;
color: white;
`

const InputField = styled.input`
box-sizing: border-box;
background-color: #222;
color: white;
width: 100%;
height: 60px;
font-size: 22px;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`