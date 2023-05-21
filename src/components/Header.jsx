import React from 'react'
import { useGlobalState } from '../context/GlobalState'


export default function Header() {
  const datos=useGlobalState()
  return (
    <div>HEADER</div>
  )
}
