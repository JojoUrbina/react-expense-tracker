export function TransactionItem({transaction,deleteTransaction}) {
  return (
    <div key={transaction.id}>
                <p>{transaction.description}</p>
                <span>{transaction.amount}</span>
                <button onClick={()=>deleteTransaction(transaction.id)}>X</button>
            </div>
  )
}
