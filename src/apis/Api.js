import axios from "axios";

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    timeout: 60000,
    headers: { Accept: 'application/json' },
});
 
let AUTH_TOKEN=localStorage.getItem('token' );
console.log(AUTH_TOKEN);
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
export default Api;