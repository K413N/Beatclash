import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { PageWrapper } from "./GlobalStyles";

const News = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("News");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <NewsWrapper>
            <NewsText>Website is currently under development.</NewsText>
           </NewsWrapper>
           </PageWrapper>
        </Wrapper>
    )
}

export default News;

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`

const NewsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 40vw;
`

const NewsText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`