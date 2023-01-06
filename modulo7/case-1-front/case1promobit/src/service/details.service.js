import api from "./api";

const getDetail = (id) => api.get(`${id}`)
const getDetailCredits = (id) => api.get(`${id}/credits`)

const DetailService = {
    getDetail,
    getDetailCredits
}

export default DetailService;