import { useCount } from "./hooks/useCount";
export function App() {
  const { count, increase, decrease, reset } = useCount(1, 2);

  return (
    <div>
      <p>Unit to purchase</p>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => reset(e)}>Default</button>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => decrease(e)}>-</button>
      <input type="number" value={count.toString()} readOnly />
      <button onClick={(e: React.MouseEvent<HTMLElement>) => increase(e)}>+</button>
      <button onClick={(e: React.MouseEvent<HTMLElement>) => {
        alert(`You selected ${count} many units to purchase!`)
        reset(e)
      }}>Purchase</button>

    </div >
  )

}