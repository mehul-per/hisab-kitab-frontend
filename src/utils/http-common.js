import axios from "axios";
import { userTokenMethod } from "../services/common.service";

const instance = axios.create({
     
    baseURL: "http://localhost:3000/",
   
        headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(function(config) {
    let token;
    if(userTokenMethod("get")){
        token = userTokenMethod("get");
    }
    return {
        ...config,
        headers: { 
            Authorization: token ? `Bearer ${token}` : null,
        },
    };
});

const responseBody = (response) => {
    return {
        ...(response?.response?.data || response?.data),
        status: response?.response?.status || response?.status || 404,
    };
};

const requests = {
    get: (url, body) => instance.get(url, body).then(responseBody),
    
    post: (url, body, headers) => 
    instance.post(url, body, headers).then(responseBody),
    
    put: (url, body) => instance.put(url, body).then(responseBody),

    delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;