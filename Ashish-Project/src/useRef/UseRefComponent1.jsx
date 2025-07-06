import React, { useEffect, useRef, useState } from 'react'

function UseRefComponent1() {


    const prevCount = useRef(0)
    const holdUesEffect = useRef(false)


    const handleClick = () => {
       prevCount.current = count
        setCount(count  + 1)
    }

    useEffect(()=>{
      if(holdUesEffect.current)console.log("Count Changed", count); 
    },[count])

    useEffect(()=>{
      holdUesEffect.current = true
    },[])

  return (
    <div>
        <h1>Current count: {count}</h1>
        <h1>Current count: {prevCount.current}</h1>
        <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default UseRefComponent1
 