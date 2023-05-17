import { useGlobalState } from '../context/GlobalState'

export default function Balance() {
    const data=useGlobalState()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
