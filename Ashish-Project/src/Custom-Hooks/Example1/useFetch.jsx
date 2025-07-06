import React, { useEffect, useState } from 'react'

function useFetch(url,initValue) {
    const [data, setData] = useState(initValue)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const userData = async() =>{
            try{
              const response = await fetch(url);
               if(!response.ok){
                throw new Error('something went wrong');
            }
              const result = await response.json();
              setData(result)
            }catch(error){
                setError(error)
            }finally {
                setLoading(false)
            }
           
        }
        userData()
    },[url])
  return {data,loading,error}
}

export default useFetch
