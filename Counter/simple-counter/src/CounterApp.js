import React from 'react'
import useCounterStore from './useCounterStore'
const CounterApp = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}

export default CounterApp
