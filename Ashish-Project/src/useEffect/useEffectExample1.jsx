import React, { useEffect, useState } from 'react'


/* to register an event listner eg-> mousemove, setInterval etc
do something only once after initail render eg-> call api after initial render
do something only after state changes (that is using useEffect as callback)
do something after components is destroyed/ unmounted(cleanup)
*/
function UseEffectFunction() {
  const[mousePos, setMousePos] = useState({x:0, y:0})

  const handleRemove = (data)=>{
    // console.log({x:data.clientX,y:data.clientY});
    
    setMousePos({x:data.clientX,y:data.clientY})
  }

  useEffect(()=>{
    document.addEventListener('mousemove', handleRemove)

  return()=>{
    document.removeEventListener('mousemove', handleRemove)
    
  }
  },[])

  

  return (
    <div>
      x-{mousePos.x}, y-{mousePos.y}
    </div>
  )
}

export default UseEffectFunction

// Paste this fun in app.js
// function App() {
 
//     const[show, setShow] = useState(true)
//   return (
//     <>
//       {/* <ComponentsReact ></ComponentsReact> */}
//       {show && <UseEffectFunction/>}
//       <button onClick={()=>setShow(!show)}>show/Hide</button>
//     </>
//   )
// }