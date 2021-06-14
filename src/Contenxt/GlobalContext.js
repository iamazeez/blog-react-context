import React,{createContext, useReducer} from 'react';
import postReducer from './Reducers/PostReducer';
import post_init_state from './initstate/PostInitState';
import authInit from './initstate/AuthInitState';
import AuthReducer from './Reducers/AuthReducer';


export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
    const [postState,postDispatch] = useReducer(postReducer,post_init_state);
    const [authState,authDispatch] = useReducer(AuthReducer,authInit);
    
    return (
        <GlobalContext.Provider value={{
            postState,
            postDispatch,
            authState,
            authDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}