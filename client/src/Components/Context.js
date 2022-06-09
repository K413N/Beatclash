import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";

export const Context = createContext(null);

export const ContextProvider = ({children}) => {
    const [chat, setChat] = useState(false);
    const [title, setTitle] = useState("test");
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

    },[chat, title])

    return(
        <Context.Provider value={{
        chat, setChat,
        isLoading, setLoading,
        title, setTitle
    }}>{children}</Context.Provider>
    );
}