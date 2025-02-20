import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharacterService.ts";

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

    useEffect(() => {
        getAllCharacters().then(res => {
            setCharacters(res);
        }).catch(err => {
            console.error();
        })
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">Test List</h2>
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
                            <td>{oneCharacter.nickname}</td>
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