import { VictoryPie, VictoryLabel } from "victory";
export default function ExpenseChart() {
  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Incomes", y: 35 },
        { x: "Expenses", y: 40 },
      ]}
      animate={{duration:2000}}
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
