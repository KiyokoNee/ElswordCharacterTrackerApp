import {RegistrationForm} from "../components/RegistrationForm.tsx";
import {LoginForm} from "../components/LoginForm.tsx";
import {Title} from "../components/Title.tsx";
import {useEffect, useState} from "react";
import {defaultUserErrors, defaultLoginUserData, defaultRegisterUserData} from "../data/defaultData.ts";
import {useNavigate} from "react-router-dom";
import {useHeader} from "../context/HeaderContext.tsx";
import * as React from "react";
import {loginUser, registerUser} from "../services/UserService.ts";

export const LoginRegistrationView = () => {
    const [loginErrors, setLoginErrors] = useState(defaultUserErrors)
    const [registerErrors, setRegisterErrors] = useState(defaultUserErrors)

    const navigate = useNavigate()
    const {setHeaderText} = useHeader()

    const [loginFormData, setLoginFormData] = useState(defaultLoginUserData)
    const [registerFormData, setRegisterFormData] = useState(defaultRegisterUserData)

    useEffect(() => {
        setHeaderText("Login or Register")
    }, [])

    const loginSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        loginUser(loginFormData)
            .then(res => {
                sessionStorage.setItem("user", JSON.stringify(res))
                navigate("/")
            })
            .catch(err => {
                setLoginErrors(err.response.data)
            })

        console.log("Login button pressed")
    }

    const registerSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        registerUser(registerFormData)
            .then(res => {
                sessionStorage.setItem("user", JSON.stringify(res))
                navigate("/")
            })
            .catch(err => {
                setRegisterErrors(err.response.data)
            })
    }

    return (
        <div className="container">
            <Title />
            <div className="d-flex justify-content-between">
                <RegistrationForm
                    formData={registerFormData}
                    setFormData={setRegisterFormData}
                    submitHandler={registerSubmitHandler}
                    errors={registerErrors}
                    setErrors={setRegisterErrors}
                />
                <LoginForm
                    formData={loginFormData}
                    setFormData={setLoginFormData}
                    submitHandler={loginSubmitHandler}
                    errors={loginErrors}
                    setErrors={setLoginErrors}
                />
            </div>
        </div>
    )
}