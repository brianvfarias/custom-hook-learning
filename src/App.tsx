import { useCount } from "./hooks/useCount";
export function App() {
  const { countData, dispatch } = useCount({ initial: 1 });

  return (
    <div>
      <p>Unit to purchase</p>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch({ type: 'RESET' });
      }}>Default</button>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch({ type: 'DECREMENT' });
      }}>-</button>
      <input type="number" value={countData.count.toString()} readOnly />
      <button onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch({ type: 'INCREMENT' });
      }}>+</button>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        alert(`You selected ${countData.count} many units to purchase!`)
        dispatch({ type: 'RESET' })
      }}>Purchase</button>

    </div >
  )

}