import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

interface loginUser {
    email: String,
    password: String
}
export const LoginPage() {
    const [loginData, setLoginData] = useState<loginUser>({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    return (
        <h1>Page reached successfully</h1>
    )
}