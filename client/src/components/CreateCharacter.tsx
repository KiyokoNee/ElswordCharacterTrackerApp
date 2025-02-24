import {useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {addOneCharacter} from "../services/CharacterService.ts";
import {nicknameErrorCheck, characterErrorCheck, roleErrorCheck, roleIdErrorCheck} from "../services/CharacterFormErrorsService.ts";

interface CharacterSlot {
    nickname: string,
    characterName: string,
    role: string,
    roleId: string,
    stage: "Lvl 99" | "3rd Job" | "In Progress" | "Master Class"
}

interface Errors {
    nickname: string,
    characterName: string,
    role: string,
    roleId: string
}

interface ChangeTracker {
    nickname: boolean,
    characterName: boolean,
    role: boolean,
    roleId: boolean
}

const defaultCharacterData: CharacterSlot = {
    nickname: "",
    characterName: "",
    role: "",
    roleId: "",
    stage: "In Progress"
}

const defaultErrors: Errors = {
    nickname: '',
    characterName: '',
    role: '',
    roleId: ''
}

const defaultChangeTracker: ChangeTracker = {
    nickname: false,
    characterName: false,
    role: false,
    roleId: false
}

export const CreateCharacter = () => {
    const [formData, setFormData] = useState(defaultCharacterData)
    const navigate = useNavigate()
    const [errors, setErrors] = useState(defaultErrors)
    const [formDataChanged, setFormDataChanged] = useState(defaultChangeTracker)

    const formErrorHandler = (e: React.ChangeEvent<HTMLElement>) => {
        let errorMsg = ''
        let name:string, value:string

        if(e.target instanceof HTMLInputElement)
            ({name, value} = e.target)
        else
            return;
        switch(name) {
            case 'nickname':
                errorMsg = nicknameErrorCheck(value)
                break;
            case 'characterName':
                errorMsg = characterErrorCheck(value)
                break;
            case 'role':
                errorMsg = roleErrorCheck(value)
                break;
            case 'roleId':
                errorMsg = roleIdErrorCheck(value)
                break;
        }
        setErrors({...errors, [e.target.name]: errorMsg})
    }

    const updateFormData = (e:React.ChangeEvent<HTMLElement>) => {
        let name: string, value: string, type, checked: boolean
        if(e.target instanceof HTMLInputElement) {
            ({name, value, type, checked} = e.target)
        } else if (e.target instanceof HTMLSelectElement) {
            ({name, value, type} = e.target)
        }
        if(type === 'checked') {
            // If we do check boxes, then this gets used
        } else {
            setFormData(prev => ({...prev, [name]: value}))
            formErrorHandler(e)
            setFormDataChanged(prev => ({...prev, [name]: true}))
        }
    }

    const validateFormErrors = () => {
        return Object.values(errors).every(value => value === '') && Object.values(formDataChanged).every(value => value === true)
    }

    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(validateFormErrors()){
            addOneCharacter(formData)
                .then(res => {
                    navigate("/")
                })
                .catch(err => {
                    console.log(err.response.data)
                })

            navigate("/")
        }else {
            setErrors({
                nickname: nicknameErrorCheck(formData.nickname),
                characterName: characterErrorCheck(formData.characterName),
                role: roleErrorCheck(formData.role),
                roleId: roleIdErrorCheck(formData.roleId)
            })
        }
    }

    return (
        <div className='container '>
            <div className="row">
                <div className='card col-md-6 offset-md-3 my-3 py-3'>
                    <h2 className='text-center'>Create a Character</h2>
                    <form onSubmit={submitHandler} className='d-flex flex-column'>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Nickname:
                                <input
                                    type="text"
                                    name="nickname"
                                    value={formData.nickname}
                                    onChange={updateFormData}
                                    className={`form-control ${errors.nickname ? 'is-invalid' : ''}`}
                                />
                                {
                                    errors.nickname && <p className='invalid-feedback'>{errors.nickname}</p>
                                }
                            </label>
                        </div>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Character:
                                <input
                                    type="text"
                                    name="characterName"
                                    value={formData.characterName}
                                    onChange={updateFormData}
                                    className={`form-control ${errors.characterName ? 'is-invalid' : ''}`}
                                />
                                {
                                    errors.characterName && <p className='invalid-feedback'>{errors.characterName}</p>
                                }
                            </label>
                        </div>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Class:
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={updateFormData}
                                    className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                                />
                                {
                                    errors.role && <p className='invalid-feedback'>{errors.role}</p>
                                }
                            </label>
                        </div>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Class Code:
                                <input
                                    type="text"
                                    name="roleId"
                                    value={formData.roleId}
                                    onChange={updateFormData}
                                    className={`form-control ${errors.roleId ? 'is-invalid' : ''}`}
                                />
                                {
                                    errors.roleId && <p className='invalid-feedback'>{errors.roleId}</p>
                                }
                            </label>
                        </div>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Stage Progress:
                                <select
                                    name="stage"
                                    value={formData.stage}
                                    onChange={updateFormData}
                                    className='form-select'
                                >
                                    <option value="In Progress">In Progress</option>
                                    <option value="Lvl 99">Lvl 99</option>
                                    <option value="3rd Job">3rd Job</option>
                                    <option value="Master Class">Master Class</option>
                                </select>
                            </label>
                        </div>
                        <button
                            className='btn btn-primary w-25 mx-auto'
                            type={"submit"}
                            disabled={false}
                        >
                            Create Character
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}