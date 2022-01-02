import User from "../../../apis/User";
export const loginSubmitAction = ({ commit, dispatch }, loginForm ) => {
   

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });

    
    try {
        User.login(
            loginForm
        ).then((res)=>{
            commit('LOGIN_SUBMIT', res.data);
            console.log(res.data.data.role);
        }).catch((error)=>{
            console.log(error.message); 
        })
    } catch (error) {
        console.log(error); 
    }
   
}


export const registrationSubmitAction = ({ commit, dispatch },  registrationForm ) => {
    commit('REGISTRATION_SUBMIT', { registrationForm });

    dispatch('addNotification', {
        type: 'success',
        message: 'Registration Successfully.'
    }, { root: true });

    
    User.register(
        registrationForm
    ).then((res)=>{
        console.log(res.data);
        
    })/*.catch((error)=>{
        console.log(error.message); 
    })*/
}


