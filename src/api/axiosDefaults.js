import axios from "axios";

axios.defaults.baseURL = 'https://drf-moments-ci-acc06eb4f190.herokuapp.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();