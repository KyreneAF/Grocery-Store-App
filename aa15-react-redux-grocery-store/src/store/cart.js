

const ADD_TOCART = 'cart/POPULATE';

export const addToCart = (cart) =>{
    return{
        type: ADD_TOCART ,
        cart
    }
}


export default function cartReducer(state = {}, action ){
    console.log(action.cart,"!!!!! action.cart")
    switch(action.type){
        case ADD_TOCART :
            const newObj = {
                ...oldObj,
                newKey: { property: "value" }
              };
          return newObj
        default:return state

    }

}
