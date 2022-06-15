import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext } from "react";
import { PageWrapper } from "./GlobalStyles";
import ReactPlayer from "react-player";

// This page will grow as time goes on, 
// and more questions are asked.

const FAQ = () => {
    const {chat, setTitle} = useContext(Context);
    setTitle("FAQ");
    return(
        <Wrapper chat={chat}>
            <PageWrapper>
        <FAQWrapper>
            <FAQText>
                <MediaWrap>
                <div>I use ReactPlayer to play all media you find on this website!</div>
                <br />
                <div>The supported media urls are:</div>
                <br />
                <ul>
                <li>Youtube</li>
                <li>Soundcloud</li>
                <li>Facebook</li>
                <li>Vimeo</li>
                <li>Twitch</li>
                <li>Streamable</li>
                <li>Wistia</li>
                <li>DailyMotion</li>
                <li>Mixcloud</li>
                <li>Vidyard</li>
                <li>Kaltura</li>
                <li>and files like mp4, webms, ogv, mp3, HLS(m3u8), DASH(mpd)</li>
                </ul>
                </MediaWrap>
                </FAQText>
           </FAQWrapper>
           </PageWrapper>
        </Wrapper>
    )
}

export default FAQ;

const MediaWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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

const FAQWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #333;
height: 40vw;
`

const FAQText = styled.div`
width: 40%;
padding: 6px;
text-align: center;
color: white;
`