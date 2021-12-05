import React from 'react'
import './Board.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'
const Board = () => {
  return (
    <div className="board">

      <div className="board_top">
        <p className="board_top_title">todo<span>2</span> </p>
        <MoreHorizontal/>
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
