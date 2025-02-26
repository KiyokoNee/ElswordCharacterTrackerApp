import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharacterService.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {CharacterData} from "../data/interfaces.ts";
import {useHeader} from "../context/HeaderContext.tsx";
import {Title} from "./Title.tsx";

export const DisplayAllCharacters = () => {
    const [characters, setCharacters] = useState<CharacterData[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const {setHeaderText} = useHeader()
    const user = (sessionStorage.getItem("user") != null) ? JSON.parse(sessionStorage.getItem("user")) : null

    useEffect(() => {
        getAllCharacters().then(res => {
            setHeaderText("Current Characters")
            setCharacters(res);
        }).catch(err => {
            console.log(err);
        })
    }, [location.pathname]);

    const createCharacter = () => {
        navigate("/create-character")
    }

    return (
        <div className="container">
            <Title />
            <button type="button" className="btn btn-primary" onClick={createCharacter}>Create Character</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Character</th>
                        <th>Class</th>
                        <th>Class Code</th>
                        <th>Stage Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        characters.map((oneCharacter, index) =>
                        <tr key={index}>
                            <td><a href={`/character/${oneCharacter.id}`}>{oneCharacter.nickname}</a></td>
                            <td>{oneCharacter.characterName}</td>
                            <td>{oneCharacter.role}</td>
                            <td>{oneCharacter.roleId}</td>
                            <td>{oneCharacter.stage}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}