import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";

const PageBottom = () => {
    let likes = 0;
    let dislikes = 0;

    const TopScroll = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    }


    return(
        <Wrapper>
            <PageBottomWrapper>
            <BottomButton>⏮</BottomButton>
            <BottomButton>◀</BottomButton>
            <BDetailWrapper>
                <BDetailText>Page: 0 of 0</BDetailText>
                <ScrollToTop onClick={(e) => TopScroll(e)}>Scroll to top</ScrollToTop>
                <BDetailText>Pages: 0 1 2 3 4</BDetailText>
            </BDetailWrapper>
            <BottomButton>▶</BottomButton>
            <BottomButton>⏯</BottomButton>
            </PageBottomWrapper>
        </Wrapper>
    )
}

export default PageBottom;


const ScrollToTop = styled.button`
width: 120px;
height: 100%;
background-color: #111;
font-size: 22px;
color: white;
border-style: solid;
border-color: gold;
border-width: 1px;
font-size: 12px;
`

const PageBottomWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 40px;
background-color: #333;
border-top-style: solid;
border-top-color: gray;
border-top-width: 1px;
`

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