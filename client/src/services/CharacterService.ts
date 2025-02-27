import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/characters'
})

export const getAllCharacters = async () => {
    return await http.get('')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const getCharacterByOwnerId = async (id:bigint) => {
    return await http.get(`/owner/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        })
}

export const getCharacterById = async (id:bigint) => {
    return await http.get(`/${id}`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const updateCharacterById = async (id:bigint, character:object) => {
    return await http.put(`/${id}`, character)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const addOneCharacter = async (character:object) => {
    return await http.post('', character)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

export const deleteCharacterById = async (id:bigint) => {
    return await http.delete(`/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}