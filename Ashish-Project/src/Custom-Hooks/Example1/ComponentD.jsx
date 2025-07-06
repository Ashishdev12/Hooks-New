import React  from 'react'
import './Component.css'
import useForm from './useForm'


const ComponentD = ()=> {
    const {formValues,handleChange, resetForm} = useForm({
    firstName: '',
    lastName: '',
    email: '',
});


   const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Form has submitted", formValues);
    resetForm()

    
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text"
                name='firstName'
                value={formValues.firstName}
                onChange={handleChange}
                placeholder='First Name' 
        />
         <input type="text"
                name='lastName'
                value={formValues.lastName}
                onChange={handleChange}
                placeholder='Last Name' 
        />
         <input type="email"
                name='email'
                value={formValues.email}
                onChange={handleChange}
                placeholder='Email' 
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ComponentD
