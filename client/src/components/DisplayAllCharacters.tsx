import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharacterService.ts";
import {useLocation, useNavigate} from "react-router-dom";

interface character {
    id: bigint,
    nickname: String,
    characterName: String,
    role: String,
    roleId: String,
    stage: String
}

export const DisplayAllCharacters = () => {
    const [characters, setCharacters] = useState<character[]>([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getAllCharacters().then(res => {
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
            <h2 className="text-center">Current Characters</h2>
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