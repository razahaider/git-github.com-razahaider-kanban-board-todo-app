import React from 'react'
import { X } from 'react-feather'
import { useState } from 'react';
import './Editable.css'
const Editable = (props) => {
  const [showEdit, setshowEdit] = useState(false);

  return (
    <div className="editable">
      {
        showEdit?
        (
      <form action=""  className={`editable_edit ${props.editClass || ""}`} onSubmit = { (event)=>{
            event.preventDefault();
            if(props.onSubmit) props.onSubmit()
          }}
      >
        <div className="editable_edit">
          <input autoFocus type="text" defaultValue={props.text} placeholder={props.placeholder}/>

          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={()=>setshowEdit(false)}/>
          </div>
        </div>
      </form>
        ):  <p className={`editable_display ${props.displayClass || ""}`} onClick={()=>setshowEdit(true)}>{props.text || "Add Item"}</p>
      }
    </div>
  )
}

export default Editable
