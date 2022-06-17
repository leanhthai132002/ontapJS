import axios from "axios";
const apiAxios = axios.create({
    baseURL: 'https://629344267aa3e6af1a089ed2.mockapi.io/'
});

export default apiAxios;