import {LoginUserData, UserErrors} from "../data/interfaces.ts";
import {useState} from "react";

interface Props {
    formData: LoginUserData,
    setFormData: Function,
    submitHandler: Function,
    errors: UserErrors,
    setErrors: Function
}


export const LoginForm = ({formData, setFormData, submitHandler, errors, setErrors}: Props) => {
    const [formDataChanged, setFormDataChanged] = useState({email: false, password: false})

    const updateFormData = (e:React.ChangeEvent<HTMLElement>) => {
        let name: string, value: string
        ({name, value} = e.target)

        setFormData((prev: LoginUserData) => ({...prev, [name]: value}))
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
                >
                    Login
                </button>
            </form>
        </div>
    )
}