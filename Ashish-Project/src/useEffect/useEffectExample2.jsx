import React, { useEffect, useState } from 'react'

function UseEffectExample2() {

  const [count, setCount] = useState(0)
  useEffect(()=>{
    let intervalId;
     intervalId = setInterval(()=>{
      setCount(count + 1)
    },1000)

    return() =>{
      clearInterval(intervalId)
    }
    
  },[count])
  return (
    <div>
     {count}
    </div>
  )
}

export default UseEffectExample2;
