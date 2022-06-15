import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "./GlobalStyles";
import Post from "./Components/Post";
import NewPost from "./Components/NewPost";
import PageBottom from "./Components/PageBottom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading";
import ReactPlayer from "react-player";

// This will be the page
// for the main post on a board

// props get filtered like so
// Thread => Post => PostBottom

const Thread = () => {
    const {chat,
        setTitle,
         hasData, setHasData,
       singleThreadData, setSingleThreadData} = useContext(Context);
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    const { threadId, boardId } = useParams();

    useEffect(() => {
        let fetchurl = "/api/get-thread/" + boardId + "/" + threadId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setSingleThreadData(data.data);
                setTitle(data.data.threadTitle)
                setHasData(true);
            } else {
                setHasData(false);
                console.log("no data!");
            }
        })
    },[])

    console.log(singleThreadData);


if(!singleThreadData){
    return(<Loading />)
} else {
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                {
                    singleThreadData.media && (
                        <MediaWrap>
                        <MediaPlayer 
                         url={singleThreadData.media} />
                        </MediaWrap>
                    )
                }

        {
            hasData && (
                <>
                <Post userId={singleThreadData.userId} avatar={singleThreadData.avatar} body={singleThreadData.body} replies={singleThreadData.replies} dislikes={singleThreadData.dislikes} likes={singleThreadData.likes} date={singleThreadData.date} user={singleThreadData.op} />
                </>
            )
        }
        {
            hasData && (
                singleThreadData.posts.map((element) => (
                    <PlayerWrap className="videoWrapper">
                <Post userId={element.userId} avatar={element.avatar} mediaurl={element.mediaurl} body={element.body} replies={element.replies} dislikes={element.dislikes} likes={element.likes} date={element.date} user={element.username} />
                </PlayerWrap>
                ))
                
            )
        }
        
        {
            isAuthenticated && (
                <NewPost />
            )
        }
        <PageBottom />
        <Spacer />
        </PageWrapper>
        </Wrapper>
    )}
}

export default Thread;

const MediaPlayer = styled(ReactPlayer)`
display: flex;
justify-content: center;
align-items: center;
height: 200px;
`

const MediaWrap = styled.div`
display: flex;
justify-content: center;
`

const PlayerWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Spacer = styled.div`
height: 150px;
width: 100%;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 126px;
background-color: black;
position: relative;
width: 100%;
height: 100%;
`