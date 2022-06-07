import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Context } from "./Context";
import { useContext } from "react";

const Profile = () => {
    const { profileId } = useParams();
    const {chat} = useContext(Context);


    return(
        <Wrapper chat={chat}>
        <div>{profileId}</div>
        </Wrapper>
    )
}

export default Profile;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "290px" : "90px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`