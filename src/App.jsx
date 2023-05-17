import { useContext, useState } from 'react'
import './App.css'
import { GlobalProvider } from './context/GlobalState'
import { Context } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

function App() {
  const data=useContext(Context)
  

  return (
    
      <GlobalProvider>
     <Header/>
     <Balance/>
     <TransactionForm/>
     <h1>Hello mundo</h1>


      </GlobalProvider>
    
  )
}

export default App
