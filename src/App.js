import React from 'react'
import './App.css'
import Board from './components/Board/Board'
import Editable from './components/Editable/Editable'
import { useState } from 'react'
const App = () => {
  const [boards, setBoards] =useState([
    {
      id: Date.now() + Math.random(),
      title: "Board-1",
      cards:[
        {
          id:  Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "backend",
              color: "black"
            }],
          desc:"complete REST APIs tutorial",
          date:""
        },
        {
          id:  Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "database",
              color: "brown"
            }],
          desc:"complete MySQL tutorial",
          date:""
        },
        {  
          id:  Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "database",
              color: "orange"
            }],
          desc:"complete mongoDB tutorial",
          date:""
          }]
    },
    {
      id: Date.now() + Math.random(),
      title: "Board-2",
      cards:[
        {
               id:  Date.now() + Math.random(),
              tasks: [],
              labels:[{
                  text: "frontend",
                  color: "blue"
                }],
              desc:"complete react tutorial",
              date:""
        },
        {
          id:  Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "frontend",
              color: "green"
            }],
          desc:"complete redux tutorial",
          date:""
          }]
    }
  ]);

  const addCard = (title, bid)=>{

      const card={
        id: Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "",
              color: ""
            }],
          desc:title,
          date:"" 
      };

      const index = boards.findIndex((item)=> item.id === bid);
      if(index<0) return;

      const tempBoards = [...boards];
      tempBoards[index].cards.push(card);
      setBoards(tempBoards);
       

  }

  const removeCard =(cid, bid)=>{

    const index = boards.findIndex((item)=> item.id === bid);
    if(index<0) return;

    const tempBoards = [...boards];
    const cardIndex = tempBoards[index].cards.filterIndex((item)=> item.id === cid)

    if(cardIndex<0) return;

    tempBoards[index].cards.splice(cardIndex, 1);
    setBoards(tempBoards);

  }

  const addBoard = (title)=>{

    setBoards([ ...boards, {
        id: Date.now() + Math.random(),
        title,
        cards:[]
      }
    ])

  }

  const removeBoard=(bid)=>{
    const tempBoards= boards.filter(item=> item.id!==bid);

    setBoards(tempBoards);
  }

  return (
    <div className="app">
      <div className="app_navbar">
          <h2>Kanban</h2>
      </div>
      <div className="app_outer">
        <div className="app_boards">
          {
            boards.map((board)=>{ 
              return <div>
              <Board key={board.id} board={board} /> 
              </div>;
          }
            )
          }
            
             <div className="app_boards_board">
               
             <Editable
              displayClass="app_boards_board_add" 
              text="Add Board"
              placeholder="Enter Board Title"
              onSubmit={(value)=>addBoard(value)}
              />
             
             </div>
        </div>
      </div>
    </div>
  )
}

export default App
