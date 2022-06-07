import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";

export const Context = createContext(null);

export const ContextProvider = ({children}) => {
    const [chat, setChat] = useState(false);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {

    },[chat])

    return(
        <Context.Provider value={{
        chat, setChat,
        isLoading, setLoading
    }}>{children}</Context.Provider>
    );
}