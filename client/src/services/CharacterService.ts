import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/characterSlots'
})

export const getAllCharacters = async () => {
    return await http.get('')
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const getCharacterById = async (id:bigint) => {
    return await http.get(`/${id}`)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const updateCharacterById = async (id:bigint, characterSlot:object) => {
    return await http.patch(`/${id}`, characterSlot)
        .then(response => response.data)
        .catch(err => {
            throw err;
        });
}

export const addOneCharacter = async (characterSlot:object) => {
    return await http.post('', characterSlot)
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