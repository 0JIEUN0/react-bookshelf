import axios from "axios";
import {
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
} from './types';

export function registerUser(dataToSubmit) {
    const response = axios.post('/api/user/register', dataToSubmit)
        .then(response => response.data);
    return {
        type: REGISTER_USER,
        payload: response,
    }
}

export function loginUser(dataToSubmit) {
    const response = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data);
    return {
        type: LOGIN_USER,
        payload: response,
    }
}

export function auth() {
    const response = axios.get('/api/user/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: response,
    }
}
