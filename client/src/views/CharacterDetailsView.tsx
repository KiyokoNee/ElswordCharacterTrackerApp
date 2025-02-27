import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {defaultCharacterData} from "../data/defaultData.ts";
import {deleteCharacterById, getCharacterById} from "../services/CharacterService.ts";
import {CharacterDetails} from "../components/CharacterDetails.tsx";
import {UserData} from "../data/interfaces.ts";
import {useHeader} from "../context/TitleContext.tsx";


export const CharacterDetailsView = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [characterData, setCharacterData] = useState(defaultCharacterData)
    const [isOwner, setIsOwner] = useState(false)
    const user: UserData | null = JSON.parse(sessionStorage.getItem("user"))
    const {setTitleText} = useHeader();

    useEffect(() => {
        if(user) {
            if(id){
                getCharacterById(BigInt(id))
                    .then(res => {
                        if(user.id === res.ownerId){
                            setIsOwner(true)
                        }
                        setCharacterData(res)
                        setTitleText(`${res.nickname} Details`)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                navigate("/")
            }
        } else {
            navigate("/login")
        }
    }, [])

    const deleteCharacter = () => {
        if(id) {
            deleteCharacterById(BigInt(id))
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
        }
    }

    const goToUpdateCharacter = () => {
        navigate(`/character/${id}/edit`)
    }

    return (
        <CharacterDetails
            characterData={characterData}
            isOwner={isOwner}
            deleteCharacter={deleteCharacter}
            goToUpdateCharacter={goToUpdateCharacter}
        />
    )
}