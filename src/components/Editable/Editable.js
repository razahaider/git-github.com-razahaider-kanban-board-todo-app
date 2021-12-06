import React from 'react'
import { X } from 'react-feather'
import { useState } from 'react';
import './Editable.css'
const Editable = (props) => {
  const [showEdit, setshowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.text ||"");
  
  const doCloseHandler=()=>{
    setshowEdit(false);
   
  }
  return (
    <div className="editable">
      {
        showEdit?
        (
      <form action=""  
           className={`editable_edit ${props.editClass || ""}`}
           onSubmit = { (event)=>{
            event.preventDefault();
            if(props.onSubmit) props.onSubmit(inputValue);
          }}
      >
        <div className="editable_edit">
          <input autoFocus
                 type="text"
                 value={inputValue} 
                 onChange={(e)=> setInputValue(e.target.value)}
                 placeholder={props.placeholder}/>

          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={()=>doCloseHandler()}/> 
          </div>
        </div>
      </form>
        )
        : 
        <p className={`editable_display ${props.displayClass || ""}`}
           onClick={()=>setshowEdit(true)}>{props.buttonText || "Add Item"}</p>
      }
    </div>
  )
}

export default Editable
