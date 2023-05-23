import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export default function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setamount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount, //el + hace que se convierta de string numerico a numero
    }); //seria action.payload
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-500 text-white px-3 py-2 mb-2 rounded-lg block  w-full"
        />
        <input
          type="number"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setamount(e.target.value)}
          className="bg-zinc-500 text-white px-3 py-2 mb-2 rounded-lg block  w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 mb-2 w-full rounded-lg block"> Add Transaction</button>
      </form>
    </div>
  );
}
