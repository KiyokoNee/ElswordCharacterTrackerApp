import {useEffect, useState} from "react";
import {CharacterSlot, StoredUserData} from "../data/interfaces.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useHeader} from "../context/TitleContext.tsx";
import {getAllCharacters, getCharacterByOwnerId} from "../services/CharacterService.ts";
import {Title} from "../components/Title.tsx";
import {DisplayCharacters} from "../components/DisplayCharacters.tsx";


export const DisplayCharacterView = () => {
    const [characters, setCharacters] = useState<CharacterSlot[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const {setTitleText} = useHeader()
    const user: StoredUserData | null = JSON.parse(sessionStorage.getItem("user") as string)

    useEffect(() => {
        if(user) {
            if(location.pathname === "/all-characters") {
                setTitleText("All Characters")
                getAllCharacters().then(res => {
                    setCharacters(res);
                }).catch(err => {
                    console.log(err);
                })
            } else {
                setTitleText(`${user.firstName}'s Characters`)
                getCharacterByOwnerId(BigInt(user.id))
                    .then(res => {
                        setCharacters(res)
                    })
                    .catch(err => {
                            console.log(err)
                        }
                    )
            }
        }
        else {
            navigate("/login")
        }
    }, [location.pathname]);

    const createCharacter = () => {
        navigate("/create-character")
    }

    return (
        <div className="container">
            <Title />
            <DisplayCharacters
                characters={characters}
                createCharacter={createCharacter}
            />
        </div>
    )
}