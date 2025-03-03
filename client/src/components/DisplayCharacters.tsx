import {CharacterData} from "../data/interfaces.ts";
import {useNavigate} from "react-router-dom";

interface Props {
    characters: CharacterData[],
}

export const DisplayCharacters = ({characters}:Props) => {
    const user = JSON.parse(sessionStorage.getItem("user") as string)
    const navigate = useNavigate();

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/create-character')}>Create Character</button>
            <div className="container rounded-3 mt-3 p-0 overflow-hidden">
                <table className="table table-dark table-striped table-hover m-0">
                    <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Character</th>
                        <th>Class</th>
                        <th>Class Code</th>
                        <th>Your Main</th>
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
                                <td>{user.mainId === oneCharacter.id ? <span>Main &#127775;</span> : ""}</td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}