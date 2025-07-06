import { useState } from "react"

 
// This coding machine round is how to hide/show the button on click
function ShowHide() {
   const[show, setShow] = useState(true)
     
  
    
 
     return ( 
         <div>
             {show ? <h3>welcome to react challenges</h3> : null}
          <button onClick={()=> setShow((show)=> !show)}>show/hide</button>
         </div>
      );
}

export default ShowHide
