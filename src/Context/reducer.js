export const initialState={
    basket:[],
    user:null
}; 

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item)=>item.price + amount,0 );


function reducer(state, action){
    
    switch(action.type){

        case "SET_USER":
            return{
              ...state,
              user: action.user
            }
        case "ADD_TO_BASKET":
            return {
                // return current state plus action taken 
                ...state,
                basket:[...state.basket, action.item]
            
            };
           

        case "REMOVE_FROM_BASKET":
            // copy basket item onto another
            let newbasket = [...state.basket];

            // find index of that item which have to remove

            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);

            if(index >= 0){
                newbasket.splice(index,1);
            }else{
                console.warn(
                    `can't remove the product (id:${action.id}) as it is not found`
                )
            }
            return {
                ...state,
                basket: newbasket
            }
            
        
            default:
                return state
    }
    
}

export default reducer;