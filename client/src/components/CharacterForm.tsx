import {CharacterSlot, Errors} from "../data/interfaces.ts";
import {FormEventHandler, useState} from "react";
import {nicknameErrorCheck, roleIdErrorCheck, roleErrorCheck, characterErrorCheck} from "../services/CharacterFormErrorsService.ts";
import * as React from "react";
import {useLocation} from "react-router-dom";
import {Title} from "./Title.tsx";
import {defaultChangeTracker, defaultErrors, editChangeTracker} from "../data/defaultData.ts";

interface Props {
    submitHandler: FormEventHandler,
    buttonText: string,
    formData: CharacterSlot,
    setFormData: Function,
    errors: Errors,
    setErrors: Function
}

export const CharacterForm = ({formData, setFormData, submitHandler, buttonText, errors, setErrors}: Props) => {
    const currPath:string = useLocation().pathname
    const [formErrors, setFormErrors] = useState(defaultErrors)
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

        setErrors((prev: Errors) => ({...prev, [name]: ""}))
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
                                    className={`form-control ${(formErrors.nickname|| errors.nickname) ? 'is-invalid' : ''}`}
                                />
                                {
                                    (formErrors.nickname || errors.nickname) && <p className='invalid-feedback mb-0'>{formErrors.nickname || errors.nickname}</p>
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
                                    className={`form-control ${(formErrors.characterName|| errors.characterName) ? 'is-invalid' : ''}`}
                                />
                                {
                                    (formErrors.characterName || errors.characterName) && <p className='invalid-feedback mb-0'>{formErrors.characterName || errors.characterName}</p>
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
                                    className={`form-control ${(formErrors.role|| errors.role) ? 'is-invalid' : ''}`}
                                />
                                {
                                    (formErrors.role || errors.role) && <p className='invalid-feedback mb-0'>{formErrors.role || errors.role}</p>
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
                                    className={`form-control ${(formErrors.roleId|| errors.roleId) ? 'is-invalid' : ''}`}
                                />
                                {
                                    (formErrors.roleId || errors.roleId) && <p className='invalid-feedback mb-0'>{formErrors.roleId || errors.roleId}</p>
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