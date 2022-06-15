import styled from "styled-components";
import { Context } from "./Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import PostBottom from "./PostBottom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Loading from "./Loading";

// props get filtered like so
// Thread => Post => PostBottom

const Post = ({user, date, likes, dislikes, replies, body, mediaurl}) => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch("/api/get-user/" + user)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setPostData(data);
                console.log(data);
            } else {
                console.log("no data!");
            }
        })
    },[])
    let avatar = "";
    if(!postData){
        return(<Loading />)
    } else {
        

        if(!postData.avatar){
            avatar = "https://images.unsplash.com/photo-1528590005476-4f5a6f2bdd9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
        } else {
            avatar = postData.avatar;
        }
    }

    return(
        <Wrapper>
            <PostWrapper>
                <AvatarWrapper>
                    <Avatar src={avatar} />
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

const Avatar = styled.img`
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