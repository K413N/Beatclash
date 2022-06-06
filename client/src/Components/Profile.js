import styled from "styled-components";
import { Wrapper } from "./GlobalStyles";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { profileId } = useParams();


    return(
        <Wrapper>
        <div>{profileId}</div>
        </Wrapper>
    )
}

export default Profile;