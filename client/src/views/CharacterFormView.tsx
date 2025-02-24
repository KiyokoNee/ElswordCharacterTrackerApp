import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CharacterSlot, Errors} from "../services/interfaces.ts";
import {addOneCharacter, getCharacterById, updateCharacterById} from "../services/CharacterService.ts";
import * as React from "react";
import {CharacterForm} from "../components/CharacterForm.tsx";

const defaultErrors: Errors = {
    nickname: '',
    characterName: '',
    role: '',
    roleId: ''
}

const defaultCharacterData: CharacterSlot = {
    nickname: "",
    characterName: "",
    role: "",
    roleId: "",
    stage: "In Progress"
}

type CharId = {
    id?: string
}

export const CharacterFormView = () => {
    const {id} =  useParams<CharId>()
    const [errors, setErrors] = useState(defaultErrors)
    const currPath = useLocation().pathname

    const navigate = useNavigate()

    const [formData, setFormData] = useState(defaultCharacterData)

    useEffect(()=> {
        if(currPath === "/create-character") {

        } else if(id){
            const idVal: bigint = BigInt(id)
            getCharacterById(BigInt(idVal))
                .then(res => {
                    setFormData(res)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            navigate("/")
        }
    }, [])

    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if(currPath === "/create-character"){
            addOneCharacter(formData)
                .then(res => {
                    console.log(res)
                    navigate("/")
                })
                .catch(err => {
                    console.log(err.response.data)
                    setErrors(err.response.data)
                })
        }else if (id){
            let idVal:bigint = BigInt(id)
            updateCharacterById(idVal, formData)
                .then(res => {
                    console.log(res)
                    navigate("/")
                })
                .catch(err => {
                    setErrors(err.response.data)
                })
        } else {
            navigate("/")
        }
    }

    return (
        <CharacterForm
            formData={formData}
            setFormData={setFormData}
            submitHandler={submitHandler}
            buttonText={currPath=== "/create-character" ? "Create Character" : "Update Character"}
            errors={errors}
        />
    )
}