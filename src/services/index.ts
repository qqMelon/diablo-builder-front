import axios from 'axios'
import { useClientStore } from "../stores/client";

const clientStore = useClientStore()

const http = axios.create({
    baseURL: clientStore.baseUrl
})

// On request
http.interceptors.request.use(
    (config) => {
        if (clientStore.accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${clientStore.accessToken}`
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// On response
http.interceptors.response.use(
    (res) => {
        return res
    }
)

export default http