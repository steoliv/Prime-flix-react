import axios from 'axios';
//movie/now_playing?api_key=41cc98c8327a81134f528d684b42ea6e

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;