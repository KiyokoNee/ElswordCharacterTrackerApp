import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {

    const isAuthenticated = () => {
        return !!sessionStorage.getItem("user")
    }
    return isAuthenticated() ? children : <Navigate to={"/login"} />
}