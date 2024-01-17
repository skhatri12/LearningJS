import React, { useState } from 'react'
import './index.css'
const Timer = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className='timer'>
      <h1>{ctime}</h1>
    </div>
  )
}

export default Timer
