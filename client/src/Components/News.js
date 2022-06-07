import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";

const News = () => {
    const {chat} = useContext(Context);
    return(
        <Wrapper chat={chat}>
        <div>News</div>
        </Wrapper>
    )
}

export default News;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "290px" : "90px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`