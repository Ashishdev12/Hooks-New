import React, { useState } from 'react'

function useCounter(initValue=0) {

        const [count, setCount] = useState(initValue)
    
        const increment = (value=1) =>{
            setCount((prevCount)=>prevCount + value)
        }
    
        const decrement = (value=1) => {
            setCount((prevCount)=> prevCount - value)
        }
    
  return {count,increment,decrement}
}

export default useCounter;
