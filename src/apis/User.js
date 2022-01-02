import Api from "./Api";

const END_POINT = 'login';
const END_POINT_REGISTRATION = 'register';

export default {

    login(data) {
        return Api.post(END_POINT, data);
    },

    register(data) {
        return Api.post(END_POINT_REGISTRATION, data);
    },
  
    
}