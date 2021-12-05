import React from 'react'
import './Board.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'
const Board = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="board">

      <div className="board_top">
        <p className="board_top_title">todo<span>2</span> </p>
        <div className="board_top_more">
          
             <MoreHorizontal  onClick={() =>{setShowDropdown(true)}}/>
            { showDropdown && (
             <Dropdown onClose={()=>setShowDropdown(false)}>
                <div className="board_dropdown">
                  <p>Delete Board</p>
                </div>
              </Dropdown>
             )}
        </div>
      </div>
      <div className="board_cards">
        <Card/>
        <Card/>  
        <Editable displayClass="boards_cards_add" text="Add Card Details" placeholder="Enter Card Title"/>
      </div>  
    </div>
  )
}

export default Board
