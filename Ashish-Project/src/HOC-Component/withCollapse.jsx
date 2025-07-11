import React, { useState } from 'react';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';

function withCollapse(ListComp) {
  function EnhancedListComp(props){
    // console.log(props);
    
    const[showList, setShowList] = useState(true)
    const handleClick = () =>{
      setShowList((prevList)=>!prevList)
    }
  
  return (
    <div>
      <div onClick={handleClick}><span>{props.title}{showList ?<IoIosArrowDown/> : <IoIosArrowForward/>}</span></div>
      {showList && <ListComp {...props}/>}
    </div>
  )
}
return EnhancedListComp
}

export default withCollapse
 