import React from 'react'
import useLocalStorage from './LocalStorage'
import './Component.css'

function ComponentC() {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const toggleTheme = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }
  return (
    <div className={theme == 'light' ? 'lighttheme': 'darktheme'}>
        <h2>Component</h2>
        <button onClick={toggleTheme}>Toggle Button</button>
         <p>current theme: {theme}</p>
    </div>
  )
}

export default ComponentC
