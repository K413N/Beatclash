import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import PostBottom from "./PostBottom";
import ReactPlayer from "react-player";

// props get filtered like so
// Thread => Post => PostBottom

const Post = ({user, date, likes, dislikes, replies, body, mediaurl}) => {
    return(
        <Wrapper>
            <PostWrapper>
                <AvatarWrapper>
                    <Avatar />
                    <DetailWrapper>
                    <PostUsername>{user}</PostUsername>
                    </DetailWrapper>
                    </AvatarWrapper>
                    <PostDetails>
                        {
                            mediaurl && (
                                <ReactPlayer url={mediaurl}></ReactPlayer>
                            )
                        }
                        
                        <PostText>{body}</PostText>
                        </PostDetails>
    </PostWrapper>
    <PostBottomWrapper>
        <PostBottom likes={likes} dislikes={dislikes} replies={replies} date={date} />
    </PostBottomWrapper>
    </Wrapper>
    )

}

export default Post;


const PostBottomWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 40px;
background-color: #333;
border-top-style: solid;
border-top-color: gray;
border-top-width: 1px;
`

const PostText = styled.div`
padding: 6px;
color: white;
`

const PostDetails = styled.div`
background-color: #222;
width: 100%;
height: 100%;
padding: 6px;
color: white;
`

const DetailWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 6px;
`

const UserTags = styled.div`
color: gray;
font-size: 12px;
padding: 6px;
`

const PostUsername = styled.div`
color: white;
font-size: 16px;
`

const Avatar = styled.div`
width: 100px;
height: 100px;
background-color: blue;
`

const AvatarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 180px;
height:100%;
border-style: solid;
border-width: 1px;
border-color: gray;
padding: 6px;
`

const PostWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #111;
height: 100%;
width: 100%;
padding: 6px;
`

const Wrapper = styled.div`
background-color: black;
position: relative;
width: 100%;
height: 100%;
padding: 6px;
`