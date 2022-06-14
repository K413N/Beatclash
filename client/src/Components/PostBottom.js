import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";

const PostBottom = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    let likes = 0;
    let dislikes = 0;
    let replies = 0;
    return(
        <Wrapper>
            <BDetailWrapper>
                <BDetailText>Posted: DD/MM/YYYY</BDetailText>
                <BDetailText>Replies: <RnumColor>{replies}</RnumColor></BDetailText>
                <BDetailText>Likes: <LnumColor>{likes}</LnumColor></BDetailText>
                <BDetailText>Dislikes: <DnumColor>{dislikes}</DnumColor></BDetailText>
            </BDetailWrapper>
            {
                isAuthenticated && (
                    <>
                    <BottomButton>👍</BottomButton>
            <BottomButton>👎</BottomButton>
            <BottomButton>Reply</BottomButton>
            </>
                )
            }
            
        </Wrapper>
    )
}

export default PostBottom;

const RnumColor = styled.div`
color: blue;
padding: 0 12px 0 12px;
`

const LnumColor = styled.div`
color: green;
padding: 0 12px 0 12px;
`

const DnumColor = styled.div`
color: red;
padding: 0 12px 0 12px;
`

const BDetailText = styled.div`
display: flex;
color: gray;
font-size: 12px;
`

const BDetailWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
background-color: #111;
font-size: 22px;
color: white;
border-style: solid;
border-color: gold;
border-width: 1px;
`

const BottomButton = styled.button`
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
}
`

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;
width: 100%;
height: 100%;
`