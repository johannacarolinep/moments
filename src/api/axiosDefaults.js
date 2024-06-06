import axios from "axios";

axios.defaults.baseURL = 'https://my-first-drf-api-bf9ed0522c05.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;