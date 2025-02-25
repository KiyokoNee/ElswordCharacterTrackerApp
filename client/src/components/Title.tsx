import {useHeader} from "../context/HeaderContext.tsx";


export const Title = () => {
    const {headerText} = useHeader()

    return (
        <h2 className="text-center py-3">{headerText}</h2>
    )
}