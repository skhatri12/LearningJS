import React, { useState } from 'react'
import './index.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className='css-counter' >
      <h1>{count}</h1>
      <button onClick={incrementCount} >Increment</button>
      <button onClick={decrementCount} >Decrement</button>
      <button onClick={resetCount} >Reset</button>
    </div>
  )
}

export default Counter
