import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer.jsx";

const initialState = {
  transactions: [],
};

export const Context = createContext(); //devuelve un objeto

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(()=>{
    localStorage.setItem("transactions",JSON.stringify(state))

  },[state])

  const addTransaction = (transaction) => {
    dispatch({
      //solo envia la action
      type: "ADD_TRANSACTION", //seria el action.type
      payload: transaction, //seria el action.payload(puede ser el id,description o amount)
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      //solo envia la action
      type: "DELETE_TRANSACTION", //seria el action.type
      payload: id, //seria el action.payload(puede ser el id,description o amount)
    });
  };

  return (
    // sirve tambien para enviar funciones a todos los componentes
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
