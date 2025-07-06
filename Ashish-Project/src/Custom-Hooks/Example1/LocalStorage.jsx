import React, { useState } from 'react'

function useLocalStorage(key, initValue) {

    const[localVariable, setLocalVariable] = useState(()=>{
        const item = localStorage.getItem(key)
         return item ? JSON.parse(item) : initValue

    });
    const setValue = (value) =>{
        setLocalVariable(value)
        localStorage.setItem(key,JSON.stringify(value))
    }


  return [localVariable, setValue]
}

export default useLocalStorage
