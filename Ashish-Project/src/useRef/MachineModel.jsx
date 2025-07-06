import React, { useEffect, useRef } from "react";

function MachineModel({ title, description, isOpen, handleClose }) {
 

  const modalRef = useRef(null);
  const openCloseOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {  
        console.log("closed outside");
        
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", openCloseOutside,true);
    return () => {
      document.removeEventListener("clicked", openCloseOutside,true);
    };
  }, []);
  if (!isOpen) return null;


  return (
    <div ref={modalRef} className="model">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default MachineModel;
