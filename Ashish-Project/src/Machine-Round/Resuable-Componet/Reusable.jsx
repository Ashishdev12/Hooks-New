import React, { Children } from 'react'
import Button from './Button'



function Reusable() {
  return (
    <div>
      <Button style={{backgroundColor: "Yellow"}} onClick={()=>alert('clicked1')}>Hello Component</Button>
      <Button style={{backgroundColor: "green"}} onClick={()=>alert('clicked2')}>Ashish Component</Button>
      <Button style={{backgroundColor: "Yellow"}} onClick={()=>alert('clicked3')}>Sindhu Component</Button>
     

    </div>
  )
}

export default Reusable
