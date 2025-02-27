import {createContext, useContext, useState} from "react"
import {HeaderContextProviderType, HeaderContextType, HeaderText} from "../data/types.ts";

const TitleContext = createContext({} as HeaderContextType)

export const useHeader = () => useContext(TitleContext);

export const HeaderProvider = ( { children }: HeaderContextProviderType ) => {
    const [titleText, setTitleText] = useState<HeaderText | null>(null)

    return (
        <TitleContext.Provider value={{titleText: titleText, setTitleText: setTitleText}}>
            { children }
        </TitleContext.Provider>
    )
}