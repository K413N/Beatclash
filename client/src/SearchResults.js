import styled from "styled-components";
import { Context } from "./Components/Context";
import { useContext, useEffect } from "react";
import Board from "./Components/Board";
import { PageWrapper } from "./GlobalStyles";
import { useParams } from "react-router-dom";
import ThreadSmall from "./Components/ThreadSmall";
import NewThread from "./Components/NewThread";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Components/Loading";



const SearchResults = () => {
    const {chat,
         setTitle,
          hasData, setHasData,
        threadData, setThreadData,
    loading, setLoading,
searchData, setSearchData} = useContext(Context);

    const { user, isAuthenticated, isLoading } = useAuth0();

    let { searchId } = useParams();
    setTitle("Search");

    useEffect(() => {
        let fetchurl = "/api/search-threads/" + searchId;
        fetch(fetchurl)
        .then((res) => res.json())
        .then((data) => {
            if(data.data){
                setHasData(true);
                setSearchData(data.data);
            } else {
                setHasData(false);
            }
            setLoading(false);
        })
    },[])

    console.log(searchData);

    if(!hasData){
        return(<Loading />)
    } else {

    

    return(
        <Wrapper chat={chat}>
            <PageWrapper>
                {
                    searchData && (
                        searchData.map((element) => (
                            <>
                            <ThreadSmall op={element[1]} tdate={element[4]} tid={element[0]} ttitle={element[3]} btitle={element[2]} />
                            </>
                        ))
                    )
                }
            </PageWrapper>
            <BottomPad />

        </Wrapper>
    )
            }
            
}

export default SearchResults;
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