import axios from "axios";


export const apiBackend = axios.create({
    baseURL:'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials:true,

})