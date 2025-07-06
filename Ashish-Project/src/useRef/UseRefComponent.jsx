import React, { useRef } from 'react'

function UseRefComponent() {
    const inputValue = useRef(null)

    const handleLabelClick = () =>{
        inputValue.current.focus()
    }

    const handleSubmit = () =>{
        console.log(inputValue.current.value);
        
    }
  return (
    <div>
        <label onClick={handleLabelClick} > Name </label>
        <input ref={inputValue} name="name" placeholder='type your name' />
        <button  onClick={handleSubmit} style={{backgroundColor:"blue", color:'white',margin:'20px'}}>Submit</button>
    </div>
  )
}

export default UseRefComponent
