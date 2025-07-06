import React, { useEffect, useState } from 'react'
// https://jsonplaceholder.typicode.com/users //
function UseEffectExample3() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            setUsers(result)    
         }
         fetchData()
    },[])

    useEffect(()=>{
        if(users.length !== 0){
       
            document.body.style.backgroundColor = 'green'
        } 
            
    },[users])
  return (
    <div>
        {users.length == 0 && <h1>loading...</h1>}
      {users.map((item)=>{
        return <h3 key={item.id}>{item.name}</h3>
      })}
    </div>
  )
}

export default UseEffectExample3;

