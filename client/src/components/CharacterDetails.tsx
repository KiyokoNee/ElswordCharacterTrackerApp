import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteCharacterById, getCharacterById} from "../services/CharacterService.ts";
import {defaultCharacterData} from "../services/defaultData.ts";

export const CharacterDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [characterData, setCharacterData] = useState(defaultCharacterData)

    useEffect(() => {
        if(id){
            getCharacterById(BigInt(id))
                .then(res => {
                    setCharacterData(res)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            navigate("/")
        }

    })

    const deleteCharacter = () => {
        if(id) {
            deleteCharacterById(BigInt(id))
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
        }
    }

    const goToUpdateCharacter = () => {
        navigate(`/character/${id}/edit`)
    }

    return (
        <div className='container '>
            <div className="row">
                <div className='card col-md-6 offset-md-3 my-3 py-3'>
                    <h2 className='text-center py-3'>{characterData.nickname} Details</h2>
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

                    <div className='w-50 mx-auto d-flex justify-content-evenly'>
                        <button className='btn btn-success' onClick={() => goToUpdateCharacter()}>Update</button>
                        <button className='btn btn-danger' onClick={() => deleteCharacter()}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}