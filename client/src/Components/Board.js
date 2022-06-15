import styled from "styled-components";
import { Context } from "./Context";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";


// This will display a clickable individual Board element
// It shows the top 5 posts, which you can click to navigate to.
// Or click the board itself to view every post.



const Board = ({btitle, bdesc, boardId}) => {
    
    const {chat,
         hasData, setHasData,
    loading, setLoading,
threadData, setThreadData} = useContext(Context);

useEffect(() => {
    
},[threadData])
    
    
    
        return(
            <Wrapper chat={chat}>
            <BoardWrapper>
                <BoardInner>
                    <BoardNav btitle={btitle} to={"/forums/" + boardId}>
                    <BoardCol>
                    <BoardTitle className="btext">{btitle}</BoardTitle>
                    <BoardDescription className="btext">{bdesc}</BoardDescription>
                    </BoardCol>
                    </BoardNav>
                    <BoardCol>
                        <Scrollable>
                            {
                                hasData && (
                                    threadData.map((element) => (
                                        element.boardId === boardId ?
                                        <RecentPost to={"/forums/" + boardId + "/" + element._id}>
                                        <PostTitle className="btext">{element.threadTitle}</PostTitle>
                                        {/* <PostReplies className="btext">{element.replies}</PostReplies> */}
                                    </RecentPost > : <></>
                                    )
                                    
                                        
                                    )
                                )
                            }
                        </Scrollable>
                        
                    </BoardCol>
                </BoardInner>
            </BoardWrapper>
            </Wrapper>
        )
    }
    


export default Board;

const Scrollable = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
overflow-y: scroll;
`

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
    background-color: #111;
    .btext{
        color: gold;
    }
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
    background-color: #111;
    .btext{
        color: gold;
    }
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