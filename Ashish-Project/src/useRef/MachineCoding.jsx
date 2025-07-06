import React, { useState } from 'react';
import {createPortal} from 'react-dom';
import '../App.css'
import MachineModel from './MachineModel'

function MachineCoding() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () =>{
        setIsOpen(true)
    }

    const handleClose = () =>{
        setIsOpen(false)
    }
  return (
    <div>
        {
          isOpen && createPortal(
                 <MachineModel
        isOpen = {isOpen}
        handleClose = {handleClose}
        title={"This is Awesome Tittle"}
        description={"This is Awesome description"}
        />,
        document.getElementById('models')
            )
        }
       
      <button onClick={handleOpen}>open Modal</button>
    </div>
  )
}

export default MachineCoding
