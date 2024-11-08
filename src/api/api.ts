import axios from "axios";

const api = axios.create({
    baseURL: "https://gear-hub-be.vercel.app/",
});

export default api