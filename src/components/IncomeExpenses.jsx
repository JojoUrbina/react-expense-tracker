import { useGlobalState } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
                    .filter((amount) => amount > 0)
                    .reduce((acc, item) => (acc + item),0)
                    .toFixed(2);
  const expense = amounts
                    .filter((amount) => amount < 0)
                    .reduce((acc, item) => (acc + item),0)
                    .toFixed(2)*-1;
   return (
    <>
      <div>
        <h2>Income</h2>
        <p>{income}</p>
      </div>
      <div>
        <h2>Expenses</h2>
        <p>{expense}</p>
      </div>
    </>
  );
}
