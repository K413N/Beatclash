import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext, useEffect } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";
import { useParams } from "react-router-dom";
import ThreadSmall from "./Components/ThreadSmall";
import NewThread from "./Components/NewThread";
import { useAuth0 } from "@auth0/auth0-react";



const Forums = () => {
    const {chat,
         setTitle,
          hasData, setHasData,
        threadData, setThreadData} = useContext(Context);

    const { user, isAuthenticated, isLoading } = useAuth0();
    let { boardId } = useParams();
    setTitle(boardId);

    useEffect(() => {
        let fetchurl = "/api/get-threads/" + boardId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                console.log(data.data);
                setHasData(true);
                setThreadData(data.data);
            } else {
                setHasData(false);
            }
        })
    },[])

    return(
        <Wrapper chat={chat}>
            <PageWrapper>
            <InnerWrapper>
            {
                        hasData && (
                            threadData.map((element) => (
                            <>
                            <ThreadSmall op={element.op} tdate={element.date} tid={element._id} ttitle={element.threadTitle} btitle={boardId} />
                            </>
                   )))}
                   </InnerWrapper>
                {
                    isAuthenticated && (
                        <NewThread />
                    )
                }
            </PageWrapper>
            <BottomPad />

        </Wrapper>
    )
}

export default Forums;
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