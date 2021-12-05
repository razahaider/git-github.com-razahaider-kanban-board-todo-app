import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick=(e)=>{
    // means if clicked outside the dropdownref then props.onclose will be called
      if(dropdownRef && !dropdownRef.current.contains(e.target)){
      if(props.onClose)
       props.onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return (
    <div ref={dropdownRef} className="dropdown"
      style={{ 
        position:"absolute",
        top: "100%",
        right: "0",
      }}
    >
      {props.children}
    </div>
  )
}

export default Dropdown
