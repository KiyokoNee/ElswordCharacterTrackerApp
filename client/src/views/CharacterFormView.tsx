import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {addOneCharacter, getCharacterById, updateCharacterById} from "../services/CharacterService.ts";
import * as React from "react";
import {CharacterForm} from "../components/CharacterForm.tsx";
import {useHeader} from "../context/TitleContext.tsx";
import {defaultCharacterData, defaultErrors} from "../data/defaultData.ts";

export const CharacterFormView = () => {
    const {id} =  useParams()
    const [errors, setErrors] = useState(defaultErrors)
    const currPath = useLocation().pathname
    const user = JSON.parse(sessionStorage.getItem("user") as string)

    const navigate = useNavigate()

    const [formData, setFormData] = useState(defaultCharacterData)
    const {setTitleText} = useHeader()

    useEffect(()=> {
        if(user){
            if(currPath === "/create-character") {
                setTitleText("Create New Character")
                setFormData(prevState => ({...prevState, ownerId: user.id}))
            } else if(id){
                const idVal: bigint = BigInt(id)
                getCharacterById(BigInt(idVal))
                    .then(res => {
                        setTitleText(`Update ${res.nickname}`)
                        setFormData(res)
                    })
                    .catch(err => {
                        console.log(err)
                        navigate("/")
                    })
            }
        }else {
            navigate("/login")
        }

    }, [])

    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if(currPath === "/create-character"){
            addOneCharacter(formData)
                .then(() => {
                    navigate("/")
                })
                .catch(err => {
                    setErrors(err.response.data)
                })
        }else if (id){
            let idVal:bigint = BigInt(id)
            updateCharacterById(idVal, formData)
                .then(() => {
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