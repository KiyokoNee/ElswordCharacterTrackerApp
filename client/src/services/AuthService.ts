import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:8080/api/auth'
})

const loginCredentials = (email, password) => ({email, password})

export const registerApi = (user) => http.post('/register', user);

export const loginApi = (email, password) =>
  http.post('/login', loginCredentials(email, password));

export const saveLoggedUser = (userId, email, role) => {
  sessionStorage.setItem('activeUserId', userId);
  sessionStorage.setItem('authenticatedUser', username);
  sessionStorage.setItem('role', role);
};

export const storeBasicAuth = (basicAuth) => localStorage.setItem('auth', basicAuth);
export const getBasicAuth = () => localStorage.getItem('auth');

export const isUserLoggedIn = () => !!sessionStorage.getItem('authenticatedUser'); // Leverage double negation for concise check

export const getLoggedInUserId = () => sessionStorage.getItem('activeUserId');
export const getLoggedInUser = () => sessionStorage.getItem('authenticatedUser');

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};