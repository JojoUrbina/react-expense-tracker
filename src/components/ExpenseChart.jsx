import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
export default function ExpenseChart() {
  const { transactions } = useGlobalState();
  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncomes) * 100
  );
  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  console.log(isNaN(totalIncomesPercentage) ? 0 : totalIncomesPercentage);
  console.log(isNaN(totalExpensesPercentage) ? 0 : totalExpensesPercentage);

  return (
    <VictoryPie
      colorScale={["#2ecc71", "#e74c3c"]}
      data={[
        {
          x: "Incomes",
          y: isNaN(totalIncomesPercentage) ? 0 : totalIncomesPercentage,
        },
        {
          x: "Expenses",
          y: isNaN(totalExpensesPercentage) ? 0 : totalExpensesPercentage,
        },
      ]}
      animate={{ duration: 2000 }}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}
