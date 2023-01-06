import api from "./api";

const getMovies = (page) => api.get(`popular`, {params:{
    page
}} )


const MovieService = {
    getMovies
   
}

export default MovieService;