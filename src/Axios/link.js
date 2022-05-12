import axios from 'axios';


const url = "http://localhost:8000/api";
let token = "OhYgZj6iY3D7rqD8YgV23i3MpzHCdbxUMvbww0jY";

export const link = axios.create({
    baseURL: url,
    headers: {
        api_token: token,
    },
});