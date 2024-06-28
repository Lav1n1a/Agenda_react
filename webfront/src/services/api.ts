import axios from "axios"

const accessToken = localStorage.getItem('accessToken');

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Authorization': accessToken
    }
});


api.interceptors.request.use((config) => {
    const tokenAccess = getTokenCookie(tokensAdmin.access);
  
    if (tokenAccess) {
      config.headers.Authorization = Bearer ${tokenAccess};
    }
  
    return config;
  });