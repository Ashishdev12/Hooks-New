import React, { useState } from "react";


function ComponentsReact() {
   
    const getInitialValue = (name) => {
     const names = [
        {   name: 'ashish', age: 21},
        {   name: 'sindhu', age: 32 }   
    ]
        return names.find((item)=>item.name === name).age
        
    }
    
   const [count, setCount] = useState(()=>getInitialValue('ashish'))

   function buttonSum(){
     setCount((prev)=>{
       return prev = prev + 1
    })
   }

    return ( 
        <div>
            <h2 style={{padding: '20px', border: "1px solid black"}}>{count}</h2>
        <button onClick={buttonSum} style={{backgroundColor:'blue', color:'white' }}>Increment</button>
        </div>
     );
}

export default ComponentsReact;