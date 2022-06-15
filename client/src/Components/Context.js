import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";

export const Context = createContext(null);

// Context for global states

export const ContextProvider = ({children}) => {
    const [chat, setChat] = useState(false);
    const [title, setTitle] = useState("test");
    const [loading, setLoading] = useState(true);
    const [postTitle, setPostTitle] = useState("");
    const [hasData, setHasData] = useState(null);
    const [threadData, setThreadData] = useState(null);
    const [singleThreadData, setSingleThreadData] = useState(null);
    const [postedReply, setPostedReply] = useState(null);
    const [profileUrl, setProfileUrl] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [tabState, setTabState] = useState("activity");
    const [allUsers, setAllUsers] = useState(null);
    const [authUrl, setAuthUrl] = useState(null);

    useEffect(() => {
        setLoading(false);
    },[])
    
if(loading){
    return (<Loading />)
} else {
    return(
        <Context.Provider value={{
        chat, setChat,
        loading, setLoading,
        title, setTitle,
        postTitle, setPostTitle,
        hasData, setHasData,
        threadData, setThreadData,
        singleThreadData, setSingleThreadData,
        postedReply, setPostedReply,
        profileUrl, setProfileUrl,
        profileData, setProfileData,
        tabState, setTabState,
        allUsers, setAllUsers,
        authUrl, setAuthUrl
    }}>{children}</Context.Provider>
    );
}
}