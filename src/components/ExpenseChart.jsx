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
  console.log(totalExpensesPercentage);
  console.log(totalIncomesPercentage);

  return (
    <VictoryPie
      colorScale={["#2ecc71","#e74c3c" ]}
      data={[
        { x: "Incomes", y: totalIncomesPercentage},
        { x: "Expenses", y: totalExpensesPercentage },
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
