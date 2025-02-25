import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {addOneCharacter, getCharacterById, updateCharacterById} from "../services/CharacterService.ts";
import * as React from "react";
import {CharacterForm} from "../components/CharacterForm.tsx";
import {useHeader} from "../context/HeaderContext.tsx";
import {defaultCharacterData, defaultErrors} from "../services/defaultData.ts";

export const CharacterFormView = () => {
    const {id} =  useParams()
    const [errors, setErrors] = useState(defaultErrors)
    const currPath = useLocation().pathname

    const navigate = useNavigate()

    const [formData, setFormData] = useState(defaultCharacterData)
    const {setHeaderText} = useHeader()

    useEffect(()=> {
        if(currPath === "/create-character") {
            setHeaderText("Create New Character")
        } else if(id){
            const idVal: bigint = BigInt(id)
            getCharacterById(BigInt(idVal))
                .then(res => {
                    setHeaderText(`Update ${res.nickname}`)
                    setFormData(res)
                })
                .catch(err => {
                    console.log(err)
                    navigate("/")
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
                    setErrors(err.response.data)
                })
        }else if (id){
            let idVal:bigint = BigInt(id)
            updateCharacterById(idVal, formData)
                .then(res => {
                    console.log(res)
                    navigate(`/character/${id}`)
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
            buttonText={currPath === "/create-character" ? "Create Character" : "Update Character"}
            errors={errors}
            setErrors={setErrors}
        />
    )
}