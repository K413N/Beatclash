import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";

export const Context = createContext(null);

// Context for global states

export const ContextProvider = ({children}) => {
    const [chat, setChat] = useState(false);
    const [title, setTitle] = useState("test");
    const [isLoading, setLoading] = useState(true);
    const [postTitle, setPostTitle] = useState("");
    const [hasData, setHasData] = useState(null);
    const [threadData, setThreadData] = useState(null);

    useEffect(() => {
        setLoading(false);
    },[chat, title])
    
if(isLoading){
    return (<Loading />)
} else {
    return(
        <Context.Provider value={{
        chat, setChat,
        isLoading, setLoading,
        title, setTitle,
        postTitle, setPostTitle,
        hasData, setHasData,
        threadData, setThreadData
    }}>{children}</Context.Provider>
    );
}
}