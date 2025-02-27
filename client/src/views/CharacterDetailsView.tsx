import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {defaultCharacterData} from "../data/defaultData.ts";
import {deleteCharacterById, getCharacterById, setMainCharacter} from "../services/CharacterService.ts";
import {CharacterDetails} from "../components/CharacterDetails.tsx";
import {StoredUserData} from "../data/interfaces.ts";
import {useHeader} from "../context/TitleContext.tsx";


export const CharacterDetailsView = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [characterData, setCharacterData] = useState(defaultCharacterData)
    const user: StoredUserData | null = JSON.parse(sessionStorage.getItem("user") as string)
    const {setTitleText} = useHeader();

    useEffect(() => {
        if(user) {
            if(id){
                getCharacterById(BigInt(id))
                    .then(res => {
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

    const setMain = () => {
        // @ts-ignore
        setMainCharacter({userId: user.id, characterId: id})
            .then(res => {
                sessionStorage.setItem("user", JSON.stringify(res))
                navigate(`/character/${id}`)
            })
    }

    return (
        <CharacterDetails
            characterData={characterData}
            deleteCharacter={deleteCharacter}
            setMain={setMain}
        />
    )
}