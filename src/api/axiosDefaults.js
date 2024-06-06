import axios from "axios";

axios.defaults.baseURL = 'https://drf-moments-ci-acc06eb4f190.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;