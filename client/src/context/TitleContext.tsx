import {createContext, useContext, useState} from "react"
import {HeaderContextProviderType, HeaderContextType, HeaderText} from "../data/types.ts";

const TitleContext = createContext({} as HeaderContextType)

export const useHeader = () => useContext(TitleContext);

export const HeaderProvider = ( { children }: HeaderContextProviderType ) => {
    const [headerText, setHeaderText] = useState<HeaderText | null>(null)

    return (
        <TitleContext.Provider value={{headerText, setHeaderText}}>
            { children }
        </TitleContext.Provider>
    )
}