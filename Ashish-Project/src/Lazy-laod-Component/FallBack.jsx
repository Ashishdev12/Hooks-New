import React from 'react'

function FallBack() {
  return (
    <>
      <div>Application Crashed Please Re-Load</div>
      <button onClick={()=>window.location.reload()}>Reload</button>
    </>
  )
}

export default FallBack
