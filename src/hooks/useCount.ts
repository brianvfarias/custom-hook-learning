import { useState } from 'react'
/*
A cool feature to implement would be a counterConfig 

basically a optional argument for the Use Count Hook, that would define the highest and lowest limits of the counter etc.
*/

export function useCount(initial = 0, step = 1, allowNegative = false) {
  if (step <= 0) {
    step = 1
  }
  const [count, setCount] = useState(initial)
  function increase(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    return setCount((prev) => prev + step)
  }

  function decrease(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    if (allowNegative) {
      return setCount((prev) => prev - step)
    }
    return setCount(count - step >= 0 ? count - step : 0)
  }

  function reset(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    return setCount(initial)
  }
  return { count, increase, decrease, reset }
}
