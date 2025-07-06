import React, { useMemo, useState } from 'react';

function UseMemoExample() {
    const [name, setName] = useState('');
    const [num, setNum] = useState('')

    const sumOfNumber = useMemo(() =>{
      console.log("Calculating");
      
       
        let val = 0
        for(let i =1; i<=num; i++ ){
            val += i
        }
        return val
      },[num])
      
  return (
    <div>
      <input type="text" placeholder='Type your name'
      value={name}
      onChange={e=>setName(e.target.value)} />

       <input type="text" placeholder='Type your number'
      value={num}
      onChange={e=>setNum(e.target.value)} />
      <h3>sum of natural nos - {sumOfNumber}</h3>
    </div>
  )
}

export default UseMemoExample;
