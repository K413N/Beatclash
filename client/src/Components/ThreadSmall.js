import styled from "styled-components";
import { Context } from "./Context";
import { useContext, useParams } from "react";

import { NavLink } from "react-router-dom";

const ThreadSmall = ({btitle, tid, ttitle, tdate, op}) => {
    return(
    <Wrapper>
            <ThreadWrapper to={"/forums/" + btitle + "/" + tid}>
        <ThreadTitle>{ttitle}</ThreadTitle>
        </ThreadWrapper>
        <ThreadDetails>
            <DetailElement>
                <DetailTitle>OP</DetailTitle>
                <Detail>{op}</Detail>
            </DetailElement>
            <DetailElement>
                <DetailTitle>Recent</DetailTitle>
                <Detail>username</Detail>
            </DetailElement>
            <DetailElement>
                <DetailTitle>Replies</DetailTitle>
                <Detail>0</Detail>
            </DetailElement>
            <DetailElement>
                <DetailTitle>Posted</DetailTitle>
                <Detail>{tdate}</Detail>
            </DetailElement>
        </ThreadDetails>
    </Wrapper>
    )
}


export default ThreadSmall;

const Detail = styled.div`
color: gray;
`

const DetailTitle = styled.div`
color: gold;
`

const DetailElement = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-style: solid;
border-width: 1px;
border-color: white;
width: 100%;
height: 60px;
padding: 4px;
`

const ThreadDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
height: 100%;
width: 100%;
background-color: #333;
`

const ThreadWrapper = styled(NavLink)`
width: 100%;
height: 100%;
background-color: #111;
text-decoration: none;

&&:hover {
    background-color: #333;
    color: gold;
}
`

const ThreadTitle = styled.div`
display: flex;
align-items: center;
inline-size: 150px;
width: 100%;
height: 100%;
font-size: 22px;
color: white;
padding: 6px;
z-index: 1;
text-decoration: none;
`

const Wrapper = styled.div`
margin: 6px 0 6px 0;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: black;
position: relative;
width: 100%;
height: 90px;
border-style: solid;
border-width: 1px;
border-color: white;
`