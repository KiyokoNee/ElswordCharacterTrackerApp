import {useEffect, useState} from "react";
import {CharacterSlot, UserData} from "../data/interfaces.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useHeader} from "../context/TitleContext.tsx";
import {getAllCharacters, getCharacterByOwnerId} from "../services/CharacterService.ts";
import {Title} from "../components/Title.tsx";
import {DisplayCharacters} from "../components/DisplayCharacters.tsx";


export const DisplayCharacterView = () => {
    const [characters, setCharacters] = useState<CharacterSlot[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const {setHeaderText} = useHeader()
    const user: UserData | null = JSON.parse(sessionStorage.getItem("user"))

    useEffect(() => {
        if(user) {
            if(location.pathname === "/all-characters") {
                setHeaderText("All Characters")
                getAllCharacters().then(res => {
                    setCharacters(res);
                }).catch(err => {
                    console.log(err);
                })
            } else {
                setHeaderText(`${user.firstName}'s Characters`)
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