import { createContext,useContext } from 'react'


export const Context = createContext()//devuelve un objeto

export const useGlobalState =()=>{
    const context=useContext(Context)
    return context
}

export const GlobalProvider=({children})=>{
    return(
        <Context.Provider value={{valor:200}} >
            {children}
        </Context.Provider>
    )

}

