import React from "react"
function Button({color,text, width, height, onClick}) { 
    
    
  return (
  <>
    <button 
    onClick={onClick}
    style={{color,width,height}}>
    {text}
    </button>
    </>
  )
}

export default Button