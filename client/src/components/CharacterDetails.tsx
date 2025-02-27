import {CharacterSlot} from "../data/interfaces.ts";
import {Title} from "./Title.tsx";

interface Props {
    characterData: CharacterSlot,
    isOwner: boolean,
    deleteCharacter: Function,
    goToUpdateCharacter: Function
}

export const CharacterDetails = ({characterData, isOwner, deleteCharacter, goToUpdateCharacter}: Props) => {

    return (
        <div className='container '>
            <div className="row">
                <div className='card col-md-6 offset-md-3 my-3 py-3'>
                    <Title />
                    <div className='w-50 mx-auto d-flex justify-content-between'>
                        <p className='fw-bold'>Character: </p>
                        <p>{characterData.characterName}</p>
                    </div>
                    <div className='w-50 mx-auto d-flex justify-content-between'>
                        <p className='fw-bold'>Class: </p>
                        <p>{characterData.role}</p>
                    </div>
                    <div className='w-50 mx-auto d-flex justify-content-between'>
                        <p className='fw-bold'>Class Code: </p>
                        <p>{characterData.roleId}</p>
                    </div>
                    {
                        isOwner ?
                            <div className='w-50 mx-auto d-flex justify-content-evenly'>
                                <button className='btn btn-success' onClick={() => goToUpdateCharacter()}>Update</button>
                                <button className='btn btn-danger' onClick={() => deleteCharacter()}>Delete</button>
                            </div> : <></>
                    }
                </div>
            </div>
        </div>
    )
}