import React from 'react'
import './Board.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'
const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const[cardValue, setCardValue] = useState({cardTitle:"default title", bid:1});
  return (
    <div className="board">

      <div className="board_top">
        <p className="board_top_title">{props.board?.title}<span>{`${props.board?.cards?.length}`}</span></p>
        <div className="board_top_more">
          
             <MoreHorizontal  onClick={() =>{setShowDropdown(true)}}/>
            { showDropdown && (
             <Dropdown onClose={()=>setShowDropdown(false)}>
                <div className="board_dropdown">
                  <p onClick={()=>{props.delBoard(props.board?.id)}}>Delete Board</p>
                </div>
              </Dropdown>
             )}
        </div>
      </div>
      <div className="board_cards">
        {
          props.board?.cards.map((c)=>
            <Card key={c.id} labels={c.labels} description={c.desc} cardDetail={c} 
            delCard={(cid)=>{props.delCard(cid, props.board?.id)}}/>
          )

        }  
        <Editable displayClass="boards_cards_add" 
        buttonText="Add Card Details"
         placeholder="Enter Card Title"
         onSubmit={(cardTitleValue)=>props.addCard(cardTitleValue, props.board?.id)}
         />
      </div>  
    </div>
  )
}

export default Board
