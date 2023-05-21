import { createContext,useContext,useState,useReducer } from 'react'
import AppReducer from './AppReducer.jsx'

const initialState={
    transaction:[] 
}

export const Context = createContext()//devuelve un objeto

export const useGlobalState =()=>{
    const context=useContext(Context)
    return context
}



export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialState)
    const addTransaction=(transaction)=>{
        dispatch({//solo envia la action
            type:"ADD_TRANSACTION",//seria el action.type
            payload:transaction,//seria el action.payload(puede ser el id,description o amount)
        })
    
    }

    return(
        // sirve tambien para enviar funciones a todos los componentes
        <Context.Provider value={{transaction:state.transaction,addTransaction}} >
            {children}
        </Context.Provider>
    )

}

