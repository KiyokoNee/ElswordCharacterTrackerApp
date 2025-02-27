import {useHeader} from "../context/TitleContext.tsx";


export const Title = () => {
    const {titleText} = useHeader()

    return (
        <h2 className="text-center py-3">{titleText}</h2>
    )
}