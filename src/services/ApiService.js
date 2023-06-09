import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export default class ApiService {
    
    constructor(endpoint){
        this.endpoint = endpoint;
    }

    post(url, params){
        url = this.buildUrl(url);
        return httpClient.post(url, params);
    }

    put(url, params){
        url = this.buildUrl(url);
        return httpClient.put(url, params);
    }

    delete(url){
        url = this.buildUrl(url);
        return httpClient.delete(url);
    }

    getAll(url){
        url = this.buildUrl(url);
        return httpClient.get(url);
    }

    buildUrl(url){
        return `${this.endpoint}${url}`;
    }
}