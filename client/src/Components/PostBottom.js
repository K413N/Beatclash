import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";

const PostBottom = () => {
    let likes = 0;
    let dislikes = 0;
    return(
        <Wrapper>
            <BDetailWrapper>
                <BDetailText>Posted: DD/MM/YYYY</BDetailText>
                <BDetailText>Likes: {likes}</BDetailText>
                <BDetailText>Dislikes: {dislikes}</BDetailText>
            </BDetailWrapper>
            <BottomButton>👍</BottomButton>
            <BottomButton>👎</BottomButton>
            <BottomButton>Reply</BottomButton>
        </Wrapper>
    )
}

export default PostBottom;

const BDetailText = styled.div`
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