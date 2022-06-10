import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Board = () => {
    const {chat} = useContext(Context);
        return(
            <Wrapper chat={chat}>
            <BoardWrapper>
                <BoardInner>
                    <BoardNav to="/home">
                    <BoardIMG />
                    <BoardCol>
                    <BoardTitle>Title</BoardTitle>
                    <BoardDescription>Brief description of board</BoardDescription>
                    </BoardCol>
                    </BoardNav>
                    <BoardCol>
                        <RecentPost to="/home">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost >
                        <RecentPost to="/home">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/home">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/home">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/home">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        
                    </BoardCol>
                </BoardInner>
            </BoardWrapper>
            </Wrapper>
        )
    
}

export default Board;

const Wrapper = styled.div`
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`

const BoardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 200px;
width: 100%;
padding: 6px;
`


const PostReplies = styled.div`
color: lightgray;
`

const PostTitle = styled.div`
color: white;
`

const BoardNav = styled(NavLink)`
display: flex;
flex-direction: row;
text-decoration: none;
width: 100%;

&&:hover {
    background-color: #431;
}
`

const RecentPost = styled(NavLink)`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 4px 8px 4px 8px;
width: 500px;
font-size: 24px;
background-color: #333;
border-style: solid;
border-color: black;
border-width: 1px;
text-decoration: none;

&&:hover {
    background-color: #431;
}
`

const BoardCol = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 6px;
`

const BoardIMG = styled(FiAlertCircle)`
background-color: black;
color: darkred;
width: 175px;
height: 175px;
`

const BoardDescription = styled.div`
font-size: 22px;
color: lightgray;
`

const BoardTitle = styled.div`
font-size: 32px;
color: white;
border-style: solid;
border-width: 1px;
border-top: 0;
border-left: 0;
border-right: 0;
border-color: black;
`

const BoardInner = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #333;
border-style: solid;
border-color: white;
border-width: 1px;
height: 100%;
padding: 6px;
border-radius: 5px;
color: white;
`