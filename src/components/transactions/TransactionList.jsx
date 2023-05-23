import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from "./TransactionItem";

export function TransactionList() {

    const {transactions,deleteTransaction}=useGlobalState()

  return (
    <div>
        {transactions.map((transaction)=>{
          return(<TransactionItem transaction={transaction} deleteTransaction={deleteTransaction}/>
            )
        })}
    </div>
  )
}
