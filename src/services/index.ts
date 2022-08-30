import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_BLIZZ_BASE_URL,
    "Content-type": "application/json",
})

export default http