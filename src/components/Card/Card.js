import React from 'react'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import './Card.css'
import Chip from '../Chip/Chip'
import { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
const Card = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="card">
       <div className="card_top">
         <div className="card_top_labels">
          <Chip text="FrontEnd" color="green"/>
         </div>
         <div className="card_top_more">

           <MoreHorizontal onClick={() =>{setShowDropdown(true)}}/>

         { showDropdown && (
          <Dropdown onClose={()=>setShowDropdown(false)}>
             <div className="card_dropdown">
               <p>Delete Card</p>
             </div>
           </Dropdown>
          )}

     </div>

       </div>
       <div className="card_title">
         Card-123
       </div>
       <div className="card_footer">
         <p><Clock />29 Sept</p>
        <p> <CheckSquare/> 1/4</p>
       </div>
    </div>
  )
}

export default Card
