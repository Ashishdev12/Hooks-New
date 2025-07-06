import React, { useRef } from 'react'

function UseRefComponent3() {
  const inputRef = useRef(null)
  const checkboxRef = useRef(null)

  function handleClick(){
  inputRef.current.focus()
   
  }

  function handleSubmit(){
    console.log(inputRef.current.value);
    console.log(checkboxRef.current.checked);
    
  }
  return (
    <div>
      <label onClick={handleClick}>Name</label>
      <input ref={inputRef} type="name" placeholder='type your name'/>
      <input ref={checkboxRef} type="checkbox"/>
      <button onClick={handleSubmit}>Button</button>

    </div>
  )
}

export default UseRefComponent3

