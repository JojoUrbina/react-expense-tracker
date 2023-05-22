import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export default function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setamount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(
      { id: window.crypto.randomUUID(), 
        description, 
        amount:+amount //el + hace que se convierta de string numerico a numero
      }); //seria action.payload
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="00.0"
          onChange={(e) => setamount(e.target.value)}
        />
        <button> Add Transaction</button>
      </form>
    </div>
  );
}
