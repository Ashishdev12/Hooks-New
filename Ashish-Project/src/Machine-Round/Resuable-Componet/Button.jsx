import React from 'react'

function Button({children,style,onClick}) {
  return (
    <div>
    <button style={style ? style : {backgroundColor: "red"}}
    onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
