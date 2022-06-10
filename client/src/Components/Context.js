import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";

export const Context = createContext(null);

// Context for global states

export const ContextProvider = ({children}) => {
    const [chat, setChat] = useState(false);
    const [title, setTitle] = useState("test");
    const [isLoading, setLoading] = useState(true);
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
        title, setTitle
    }}>{children}</Context.Provider>
    );
}
}