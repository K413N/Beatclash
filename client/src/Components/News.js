import styled from "styled-components";
import { Title } from "./GlobalStyles";
import { Context } from "./Context";
import { useContext } from "react";

const News = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("News");
    return(
        <Wrapper chat={chat}>
        <NewsWrapper>
            <NewsText>Website is currently under development.</NewsText>
           </NewsWrapper>
        </Wrapper>
    )
}

export default News;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "316px" : "116px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`

const NewsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #111;
height: 50vw;
`

const NewsText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`