import axios from "axios";

axios.defaults.baseURL = "https://fifth-project-b52d7d161462.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;