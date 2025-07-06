import React, { useState } from 'react'
import './Component.css'
import useCounter from './useCounter'

function ComponentB() {
   
    const {count, increment, decrement} = useCounter(1)
  return (
    <div className='counter'>
        <h2>ComponentB</h2>
        <button onClick={()=>increment(2)}>+</button>
        <span>{count}</span>
        <button onClick={()=>decrement(2)}>-</button>
    </div>
  )
}

export default ComponentB
