import {createContext, useContext, useState} from "react"
import {HeaderContextProviderType, HeaderContextType, HeaderText} from "../data/types.ts";

const HeaderContext = createContext({} as HeaderContextType)

export const useHeader = () => useContext(HeaderContext);

export const HeaderProvider = ( { children }: HeaderContextProviderType ) => {
    const [headerText, setHeaderText] = useState<HeaderText | null>(null)

    return (
        <HeaderContext.Provider value={{headerText, setHeaderText}}>
            { children }
        </HeaderContext.Provider>
    )
}