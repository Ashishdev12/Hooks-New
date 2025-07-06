
import React, { useEffect, useMemo, useState } from 'react'

function UseMemoExample1() {
  const[name, setName] = useState('Ashish')
  const[age, setAge] = useState('26')
  const[status, setStatus] = useState('single')

  const userInfo = useMemo(()=>({
  
    name: name,
    isSad: status == "single"?true:false
    
  }),[name, status])

  useEffect(()=>{
    console.log("user has been updated", userInfo);
    
  },[userInfo])

  return (
    <div>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>
      <input value={age} type="number" placeholder='Enter Your age' onChange={(e)=>setAge(e.target.value)}/>

      <select value={status} onChange={e=>setStatus(e.target.value)}>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="coder">Coder</option>
      </select>
     <h2>Output</h2>
     <h3>Hi i am {name}, i ma {age}, years old and i am {status}</h3>

    </div>
  )
}

export default UseMemoExample1
