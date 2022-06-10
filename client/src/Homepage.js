import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";

const Forums = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("Forums");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <BoardGrouping>
                    <GroupTitle>Discussions</GroupTitle>
                <Board btitle={"General"} bdesc={"General discussion about anything!"} />
                <Board btitle={"Music"} bdesc={"Discuss and share music!"} />
                </BoardGrouping>
                <BoardGrouping>
                <GroupTitle>Developer's Corner</GroupTitle>
                <Board btitle={"Music Production"} bdesc={"Techniques on music producing!"} />
                <Board btitle={"Youtube"} bdesc={"Share your youtube videos!"} />
                <Board btitle={"Art"} bdesc={"Browse and share your art!"} />
                <Board btitle={"3D Modeling"} bdesc={"Anything 3D goes here!"} />
                </BoardGrouping>
            <BottomPad />
            </PageWrapper>
        </Wrapper>
    )
}

export default Forums;

const GroupTitle = styled.div`
color: gold;
font-size: 32px;
`

const BoardGrouping = styled.div`
padding: 6px;
background-color: #111;
`

const PHText = styled.div`
color: white;
`

const BottomPad = styled.div`
width: 100%;
height: 44px;
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