import { useGlobalState } from '../context/GlobalState'

export default function Balance() {
    const {transactions}=useGlobalState();
    const amounts =transactions.map((transaction)=>transaction.amount)
   const total=amounts.reduce((acc,item)=>{
    return acc+item;
   },0)

  return (
    <div>
      <h1>Your Balance</h1>
      {total}
    </div>
  );
}
