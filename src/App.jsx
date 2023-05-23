import "./App.css";
import "./index.css";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-800 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-700 p-10 rounded-lg flex ">
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
