import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8080/api/admin'
})

export const registerUser = async (user: object) => {
    return await http.post('/register',user)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}