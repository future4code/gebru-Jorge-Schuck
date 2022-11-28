import axios from "axios";
import { BASE_URL } from "../constants/URL";

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use(config => {
    config.params = {
        ...config.params,
       
    };

    return config;
})

export default api;