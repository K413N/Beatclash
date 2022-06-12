import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";
import { useParams } from "react-router-dom";
import ThreadSmall from "./Components/ThreadSmall";
import NewThread from "./Components/NewThread";



const Boards = () => {
    const {chat, setTitle} = useContext(Context);
    let { boardid } = useParams();
    setTitle(boardid);
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <InnerWrapper>
                <ThreadSmall ptitle={"Post Title"} btitle={boardid} />
                <ThreadSmall ptitle={"Post Title"} btitle={boardid} />
                <ThreadSmall ptitle={"Post Title"} btitle={boardid} />
                <ThreadSmall ptitle={"Post Title"} btitle={boardid} />
                <ThreadSmall ptitle={"Post Title"} btitle={boardid} />
                </InnerWrapper>
                <NewThread />
            </PageWrapper>
            <BottomPad />

        </Wrapper>
    )
}

export default Boards;
const PHText = styled.div`
color:white;
`

const BottomPad = styled.div`
width: 100%;
height: 44px;
`

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 126px;
background-color: #111;
position: relative;
width: 100%;
height: 100%;
`