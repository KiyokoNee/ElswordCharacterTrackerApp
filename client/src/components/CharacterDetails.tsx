import {CharacterData} from "../data/interfaces.ts";
import {Title} from "./Title.tsx";
import {useNavigate} from "react-router-dom";

interface Props {
    characterData: CharacterData,
    deleteCharacter: Function,
    setMain: Function
}

export const CharacterDetails = ({characterData, deleteCharacter, setMain}: Props) => {
    const user = JSON.parse(sessionStorage.getItem("user") as string)
    const navigate = useNavigate()

    return (
        <div className='container '>
            <div className="row">
                <div className='card col-md-6 offset-md-3 my-3 py-3 card-bg'>
                    <Title />
                    <div className='w-50 mx-auto d-flex justify-content-between align-items-center'>
                        <p className='fw-bold'>Character: </p>
                        <p>{characterData.characterName}</p>
                    </div>
                    <div className='w-50 mx-auto d-flex justify-content-between align-items-center'>
                        <p className='fw-bold'>Class: </p>
                        <p>{characterData.role}</p>
                    </div>
                    <div className='w-50 mx-auto d-flex justify-content-between align-items-center'>
                        <p className='fw-bold'>Class Code: </p>
                        <p>{characterData.roleId}</p>
                    </div>
                    <div className='w-50 mx-auto d-flex justify-content-between align-items-center'>
                        <p className='fw-bold'>Stage Progress: </p>
                        <p>{characterData.stage}</p>
                    </div>
                    {
                        (user.id === characterData.ownerId) ?
                            <div className='w-50 mx-auto d-flex justify-content-between align-items-center'>
                                <p className='fw-bold py-0'>Main Status: </p>
                                <p>
                                    {
                                        (user.mainId === characterData.id) ? "Current Main" : <button className='btn btn-link p-0' onClick={() => setMain()}>Set Main</button>
                                    }
                                </p>
                            </div> :
                            ''
                    }
                </div>
                {
                    (user.id === characterData.ownerId) ?
                        <div className='w-75 mx-auto d-flex justify-content-evenly'>
                            <button className='btn btn-success' onClick={() => navigate(`/character/${characterData.id}/edit`)}>Update</button>
                            <button className='btn btn-danger' onClick={() => deleteCharacter()}>Delete</button>
                        </div> : <></>
                }
            </div>
        </div>
    )
}