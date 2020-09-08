export const initialState={
    basket:[{
        id:"1",
              title:"OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 4000mAH Battery)",
              price:649,
              rating:4,
              image:"https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6-5.jpg"
    }],
    user:null,
}; 

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item)=>item.price + amount,0 );


function reducer(state, action){
    
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                // return current state plus action taken 
                ...state,
                basket:[...state.basket, action.item]
            
            };
            break

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
            break
        
            default:
                return state
    }
    
}

export default reducer;