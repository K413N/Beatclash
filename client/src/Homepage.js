import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";
import Loading from "./Components/Loading";

// list of all the boards on the forum

const Homepage = () => {
    const {chat, setTitle, loading } = useContext(Context);
    setTitle("Homepage");

    if(loading){
        return (<Loading />)
    } else {
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                <BoardGrouping>
                    <GroupTitle>Discussions</GroupTitle>
                    <Board boardId={"ev"} btitle={"Events"} bdesc={"Information on events!"} />
                <Board boardId={"gen"} btitle={"General"} bdesc={"General discussion about anything!"} />
                <Board boardId={"mus"} btitle={"Music"} bdesc={"Discuss and share music!"} />
                </BoardGrouping>
                <BoardGrouping>
                <GroupTitle>Developer's Corner</GroupTitle>
                <Board boardId={"pro"} btitle={"Music Production"} bdesc={"Techniques on music producing!"} />
                <Board boardId={"dev"} btitle={"Game Development"} bdesc={"Anything related to projects in game engines!"} />
                <Board boardId={"yt"} btitle={"Youtube"} bdesc={"Share your youtube videos!"} />
                <Board boardId={"art"} btitle={"Art"} bdesc={"Browse and share your art!"} />
                <Board boardId={"3d"} btitle={"3D Modeling"} bdesc={"Anything 3D goes here!"} />
                </BoardGrouping>
            <BottomPad />
            </PageWrapper>
        </Wrapper>
    )
    }
}

export default Homepage;

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