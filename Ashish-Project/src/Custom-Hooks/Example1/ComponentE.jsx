import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

function ComponentE() {
    
    const  {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users',[]);

    if(loading) return <h1>Loading...</h1>
    if(error) return <h2>{error.message}</h2>

  return (
    <div>
      <ul>
        {data.map((item)=>(
            <li key={item.id}>{item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentE
