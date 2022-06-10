import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// This will display a clickable individual Board element
// It shows the top 5 posts, which you can click to navigate to.
// Or click the board itself to view every post.

const Board = ({btitle, bdesc}) => {
    const {chat} = useContext(Context);
        return(
            <Wrapper chat={chat}>
            <BoardWrapper>
                <BoardInner>
                    <BoardNav to="/">
                    <BoardCol>
                    <BoardTitle>{btitle}</BoardTitle>
                    <BoardDescription>{bdesc}</BoardDescription>
                    </BoardCol>
                    </BoardNav>
                    <BoardCol>
                        <RecentPost to="/">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost >
                        <RecentPost to="/">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/">
                            <PostTitle>Post Title</PostTitle>
                            <PostReplies>0</PostReplies>
                        </RecentPost>
                        <RecentPost to="/">
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
background-color: black;
position: relative;
width: 100%;
height: 100%;
`

const BoardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #111;
height: 200px;
width: 100%;
padding: 6px;
`


const PostReplies = styled.div`
font-size: 12px;
color: lightgray;
`

const PostTitle = styled.div`
font-size: 12px;
color: white;
`

const BoardNav = styled(NavLink)`
display: flex;
flex-direction: row;
text-decoration: none;
width: 100%;

&&:hover {
    background-color: #611;
}
`

const RecentPost = styled(NavLink)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 4px 8px 4px 8px;
width: 100%;
height: 100%;
font-size: 24px;
background-color: #222;
border-style: solid;
border-color: black;
border-width: 1px;
text-decoration: none;

&&:hover {
    background-color: #611;
}
`

const BoardCol = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 50%;
height: 100%;
padding: 6px;
`

const BoardDescription = styled.div`
padding: 16px;
font-size: 16px;
width: 200%;
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
width: 100%;
padding: 6px;
border-radius: 12px;
color: white;
`