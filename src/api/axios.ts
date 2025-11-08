import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    timeout: 10000
});

/* api.interceptors.request.use(
    (config) => {
        const adminkey = import.meta.env.VITE_API_BASE_URL;

        if( adminkey && config.headers && config.url?.startsWith('/admin')) {
            config.headers['x-api-key'] = adminkey
        }
        return config
    },
    (error) => Promise.reject(error)
); */

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response){
            
            return Promise.reject({
                status: error.response.status,
                data: error.response.data,
                message: error.response.data?.message || error.message
            })
        }

        return Promise.reject({ message: error.message || 'error' } )
    }
)

export default api;