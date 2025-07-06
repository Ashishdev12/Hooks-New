import React, { useState } from 'react'

const  useForm = (initValues) =>{

    const[formValues,setFormValues] = useState(initValues)
     
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

       const resetForm = () =>{
        setFormValues(initValues)
       }

  return {formValues, handleChange, resetForm}
}

export default useForm;
