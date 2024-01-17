import { useReducer } from 'react'
/*
A cool feature to implement would be a counterConfig 

basically a optional argument for the Use Count Hook, that would define the highest and lowest limits of the counter etc.
*/
interface UseCountParams {
  initial: number
  step?: number
  allowNegative?: boolean
}

interface CountState extends UseCountParams {
  count: number
}

interface ReducerAction {
  type: string
}

function reducer(state: CountState, action: ReducerAction) {
  // Workaround to some TS errors
  const { step } = state
  const currentStep = step ? step : 1
  // const currentCount = count ? count : 0

  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, count: state.count + currentStep }
    }
    case 'DECREMENT': {
      if (state.allowNegative) {
        return { ...state, count: state.count - currentStep }
      }
      return {
        ...state,
        count: state.count - currentStep >= 0 ? state.count - currentStep : 0,
      }
    }
    case 'RESET': {
      return { ...state, count: state.initial }
    }
    default: {
      return state
    }
  }
}

export function useCount({
  initial = 0,
  step = 1,
  allowNegative = false,
}: UseCountParams) {
  const countInfo = {
    count: initial,
    initial,
    step: step ? 1 : step,
    allowNegative,
  }
  const [countData, dispatch] = useReducer(reducer, countInfo)
  // if (step <= 0) {
  //   step = 1
  // }
  // const [count, setCount] = useState(initial)
  // function increase(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault()
  //   return setCount((prev) => prev + step)
  // }

  // function decrease(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault()
  //   if (allowNegative) {
  //     return setCount((prev) => prev - step)
  //   }
  //   return setCount(count - step >= 0 ? count - step : 0)
  // }

  // function reset(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault()
  //   return setCount(initial)
  // }
  return { countData, dispatch }
}
