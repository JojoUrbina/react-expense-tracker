import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li>
      <p>{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
  );
}
