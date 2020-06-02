import axios from 'axios';


const axiosWithCred = (axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
    withCredentials: true
}));

export default axiosWithCred();