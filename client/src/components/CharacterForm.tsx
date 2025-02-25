import {ChangeTracker, CharacterSlot, Errors} from "../services/interfaces.ts";
import {FormEventHandler, useState} from "react";
import {nicknameErrorCheck, roleIdErrorCheck, roleErrorCheck, characterErrorCheck} from "../services/CharacterFormErrorsService.ts";
import * as React from "react";
import {useLocation} from "react-router-dom";
import {Title} from "./Title.tsx";

interface Props {
    submitHandler: FormEventHandler,
    buttonText: string,
    formData: CharacterSlot,
    setFormData: Function,
    errors: Errors
}
const defaultChangeTracker: ChangeTracker = {
    nickname: false,
    characterName: false,
    role: false,
    roleId: false
}

const editChangeTracker: ChangeTracker ={
    nickname:true,
    characterName: true,
    role: true,
    roleId: true
}

export const CharacterForm = ({formData, setFormData, submitHandler, buttonText, errors}: Props) => {
    const currPath:string = useLocation().pathname
    const [formErrors, setFormErrors] = useState(errors)
    const [formDataChanged, setFormDataChanged] = useState(currPath === '/create-character' ? defaultChangeTracker : editChangeTracker)

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
        setFormErrors({...formErrors, [e.target.name]: errorMsg})
    }

    const updateFormData = (e:React.ChangeEvent<HTMLElement>) => {
        let name: string, value: string
        if(e.target instanceof HTMLInputElement) {
            ({name, value} = e.target)
        } else if (e.target instanceof HTMLSelectElement) {
            ({name, value} = e.target)
        }

        setFormData((prev: CharacterSlot) => ({...prev, [name]: value}))
        formErrorHandler(e)
        setFormDataChanged(prev => ({...prev, [name]: true}))
    }

    const validateFormErrors = () => {
        return Object.values(formErrors).every(value => value === '') && Object.values(formDataChanged).every(value => value === true)
    }

    return (
        <div className='container '>
            <div className="row">
                <div className='card col-md-6 offset-md-3 my-3 py-3'>
                    <Title />
                    <form onSubmit={submitHandler} className='d-flex flex-column'>
                        <div className='mb-2 w-50 mx-auto'>
                            <label className='form-label'>
                                Nickname:
                                <input
                                    type="text"
                                    name="nickname"
                                    value={formData.nickname}
                                    onChange={updateFormData}
                                    className={`form-control ${formErrors.nickname ? 'is-invalid' : ''}`}
                                />
                                {
                                    formErrors.nickname && <p className='invalid-feedback'>{formErrors.nickname}</p>
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
                                    className={`form-control ${formErrors.characterName ? 'is-invalid' : ''}`}
                                />
                                {
                                    formErrors.characterName && <p className='invalid-feedback'>{formErrors.characterName}</p>
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
                                    className={`form-control ${formErrors.role ? 'is-invalid' : ''}`}
                                />
                                {
                                    formErrors.role && <p className='invalid-feedback'>{formErrors.role}</p>
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
                                    className={`form-control ${formErrors.roleId ? 'is-invalid' : ''}`}
                                />
                                {
                                    formErrors.roleId && <p className='invalid-feedback'>{formErrors.roleId}</p>
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
                            disabled={!validateFormErrors()}
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}