import Order from "../../../apis/Order";
export const orderSubmitAction = ({ commit, dispatch },  form ) => {
    commit('ORDER_SUBMIT', { form });

    dispatch('addNotification', {
        type: 'success',
        message: 'Order Submit Successfully.'
    }, { root: true });

    
    Order.store(
        form
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


