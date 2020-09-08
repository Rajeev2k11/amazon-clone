import React, {useReducer, useContext, createContext} from 'react';

export const StateContext = createContext()



export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
); 
// this is how we use it inside a component
export const useStateValue = ()=> useContext(StateContext);