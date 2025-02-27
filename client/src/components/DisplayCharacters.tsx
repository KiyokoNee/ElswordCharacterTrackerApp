import {CharacterSlot} from "../data/interfaces.ts";

interface Props {
    characters: CharacterSlot[],
    createCharacter: Function
}

export const DisplayCharacters = ({characters, createCharacter}:Props) => {

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => createCharacter()}>Create Character</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Character</th>
                        <th>Class</th>
                        <th>Class Code</th>
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
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}