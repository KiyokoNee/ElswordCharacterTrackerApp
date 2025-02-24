import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharacterService.ts";
import {useNavigate} from "react-router-dom";

interface characterSlot {
    id: bigint,
    nickname: String,
    characterName: String,
    role: String,
    roleId: String,
    stage: String
}

export const DisplayAllCharacters = () => {
    const [characterSlots, setCharacters] = useState<characterSlot[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllCharacters().then(res => {
            setCharacters(res);
        }).catch(err => {
            console.error();
        })
    }, []);

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
                        characterSlots.map((oneCharacter, index) =>
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