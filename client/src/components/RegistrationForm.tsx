import {Errors, UserData, UserErrors} from "../data/interfaces.ts";
import {ChangeEvent, FormEventHandler, useState} from "react";
import {defaultRegisterChangeTracker, defaultUserErrors} from "../data/defaultData.ts";
import * as React from "react";
import {
    confirmPasswordErrorCheck,
    emailErrorCheck,
    firstNameErrorCheck,
    lastNameErrorCheck,
    passwordErrorCheck
} from "../services/RegisterUserErrorsService.ts";

interface Props {
    formData: UserData,
    setFormData: Function,
    submitHandler: FormEventHandler<HTMLFormElement>
    errors: UserErrors,
    setErrors: Function
}

export const RegistrationForm = ({formData, setFormData, submitHandler, errors, setErrors}: Props) => {
    const [formErrors, setFormErrors] = useState(defaultUserErrors)
    const [formDataChanged, setFormDataChanged] = useState(defaultRegisterChangeTracker)

    const formErrorHandler = (e: React.ChangeEvent<HTMLElement>) => {
        let errorMsg = ''
        let secondPassMsg = ''
        let name:string, value:string

        if(e.target instanceof HTMLInputElement)
            ({name, value} = e.target)
        else
            return;
        switch(name) {
            case 'firstName':
                errorMsg = firstNameErrorCheck(value)
                break;
            case 'lastName':
                errorMsg = lastNameErrorCheck(value)
                break;
            case 'email':
                errorMsg = emailErrorCheck(value)
                break;
            case 'password':
                errorMsg = passwordErrorCheck(value)
                secondPassMsg = confirmPasswordErrorCheck(formData.confirmPassword, value)
                break;
            case 'confirmPassword':
                errorMsg = passwordErrorCheck(formData.password)
                secondPassMsg = confirmPasswordErrorCheck(value, formData.password)
                break;
        }

        if(secondPassMsg) {
            setFormErrors({...formErrors, password: errorMsg, confirmPassword: secondPassMsg})
        } else {
            setFormErrors({...formErrors, [e.target.name]: errorMsg})
        }
    }

    const updateFormData = (e:ChangeEvent<HTMLElement>) => {
        let name: string, value: string
        if(e.target instanceof HTMLInputElement) {
            ({name, value} = e.target)
        } else {
            return
        }

        setErrors((prev: Errors) => ({...prev, [name]: ""}))
        setFormData((prev: UserData) => ({...prev, [name]: value}))
        formErrorHandler(e)
        setFormDataChanged(prev => ({...prev, [name]: true}))
    }

    const validateFormErrors = () => {
        return Object.values(formErrors).every(value => value === '') && Object.values(formDataChanged).every(value => value === true)
    }

    return (
        <div className="card col-md-5  my-3 py-3">
            <h3 className="text-center py-3">Register</h3>
            <form className='d-flex flex-column' onSubmit={submitHandler}>
                <div className='mb-2 w-50 mx-auto'>
                    <label className='form-label'>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            onChange={updateFormData}
                            className={`form-control ${(formErrors.firstName || errors.firstName) ? 'is-invalid' : ''}`}
                        />
                        {
                            (formErrors.firstName || errors.firstName) && <p className='invalid-feedback mb-0'>{formErrors.firstName || errors.firstName}</p>
                        }
                    </label>
                </div>
                <div className="mb-2 w-50 mx-auto">
                    <label className="form-label">
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            onChange={updateFormData}
                            className={`form-control ${(formErrors.lastName || errors.lastName) ? 'is-invalid' : ''}`}
                        />
                        {
                            (formErrors.lastName || errors.lastName) && <p className='invalid-feedback mb-0'>{formErrors.lastName || errors.lastName}</p>
                        }
                    </label>
                </div>
                <div className="mb-2 w-50 mx-auto">
                    <label className="form-label">
                        Email:
                        <input
                            type="email"
                            name="email"
                            onChange={updateFormData}
                            className={`form-control ${(formErrors.email || errors.email) ? 'is-invalid' : ''}`}
                        />
                        {
                            (formErrors.email || errors.email) && <p className='invalid-feedback mb-0'>{formErrors.email || errors.email}</p>
                        }
                    </label>
                </div>
                <div className="mb-2 w-50 mx-auto">
                    <label className="form-label">
                        Password:
                        <input
                            type="password"
                            name="password"
                            onChange={updateFormData}
                            className={`form-control ${(formErrors.password || errors.password) ? 'is-invalid' : ''}`}
                        />
                        {
                            (formErrors.password || errors.password) && <p className='invalid-feedback mb-0'>{formErrors.password || errors.password}</p>
                        }
                    </label>
                </div>
                <div className="mb-2 w-50 mx-auto">
                    <label className="form-label">
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={updateFormData}
                            className={`form-control ${(formErrors.confirmPassword || errors.confirmPassword) ? 'is-invalid' : ''}`}
                        />
                        {
                            (formErrors.confirmPassword || errors.confirmPassword) && <p className='invalid-feedback mb-0'>{formErrors.confirmPassword || errors.confirmPassword}</p>
                        }
                    </label>
                </div>
                <button
                    className="btn btn-primary w-25 mx-auto"
                    type="submit"
                    disabled={!validateFormErrors()}
                >
                    Register
                </button>
            </form>
        </div>
    )
}