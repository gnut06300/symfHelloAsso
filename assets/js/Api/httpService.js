import axios from "axios";

const httpService = axios.create({
<<<<<<< HEAD
    baseURL:'https://127.0.0.1:8000/api',
=======
    baseURL:'http://localhost:8000',
>>>>>>> f51fb04dc38e12184c40bbaa3953e0b765d6b3a8
    headers:{
        'Content-Type': 'application/json',
    }
});
export default httpService;