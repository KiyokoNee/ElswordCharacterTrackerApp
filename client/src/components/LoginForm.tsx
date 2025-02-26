import {LoginUserData, UserErrors} from "../data/interfaces.ts";
import {FormEventHandler, useState} from "react";
import * as React from "react";

interface Props {
    formData: LoginUserData,
    setFormData: Function,
    submitHandler: FormEventHandler<HTMLFormElement>,
    errors: UserErrors,
    setErrors: Function
}


export const LoginForm = ({formData, setFormData, submitHandler, errors, setErrors}: Props) => {
    const [formDataChanged, setFormDataChanged] = useState({email: false, password: false})

    const updateFormData = (e:React.ChangeEvent<HTMLElement>) => {
        let name: string, value: string
        if( e.target instanceof HTMLInputElement) {
            ({name, value} = e.target)
        } else {
            return
        }

        setErrors((prev: UserErrors)  => ({...prev, [name]: ''}))
        setFormDataChanged(prev => ({...prev, [name]: true}))
        setFormData((prev: LoginUserData) => ({...prev, [name]: value}))
    }


    const validateFormErrors = () => {
        return Object.values(errors).every(value => value === '') && Object.values(formDataChanged).every(value => value === true)
    }

    return (
        <div className="card col-md-5 my-3 py-3">
            <h3 className="text-center py-3">Login</h3>
            <form className="d-flex flex-column" onSubmit={submitHandler}>
                <div className="mb-2 w-50 mx-auto">
                    <label className='form-label'>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={updateFormData}
                            className={`form-control ${(errors.email) ? 'is-invalid' : ''} `}
                        />
                    </label>
                </div>
                <div className="mb-2 w-50 mx-auto">
                    <label className="form-label">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={updateFormData}
                            className={`form-control ${(errors.password) ? 'is-invalid' : ''} `}
                        />
                    </label>
                </div>
                <button
                    className="btn btn-primary w-25 mx-auto"
                    type="submit"
                    disabled={!validateFormErrors()}
                >
                    Login
                </button>
            </form>
        </div>
    )
}