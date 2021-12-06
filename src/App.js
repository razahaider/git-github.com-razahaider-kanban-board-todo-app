import React from 'react'
import './App.css'
import Board from './components/Board/Board'
import Editable from './components/Editable/Editable'
import { useState } from 'react'
import Header from './components/header/Header'
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
  const [target, setTarget] = useState({cid:"", bid:""});

  const handleDragEnter = (cid, bid) =>{
    setTarget({
       cid,
      bid
      });
  };
  const handleDragEnd = (cid, bid) =>{
      let sourceBoard_Index, sourceCard_Index, targetBoard_Index, targetCard_Index;

      sourceBoard_Index = boards.findIndex((i)=> i.id===bid);
      if(sourceBoard_Index<0) return;

      sourceCard_Index = boards[sourceBoard_Index].cards?.findIndex((i)=> i.id===cid);
      if(sourceCard_Index<0) return;

      targetBoard_Index = boards.findIndex((i)=> i.id===target.bid);
      if(targetBoard_Index<0) return;

      targetCard_Index = boards[targetBoard_Index].cards?.findIndex((i)=> i.id===target.cid);
      if(targetCard_Index <0) return;

      const tempboards = [...boards];
      const tempCard = tempboards[sourceBoard_Index].cards[sourceCard_Index];
     
      tempboards[sourceBoard_Index].cards.splice(sourceCard_Index, 1);
      tempboards[targetBoard_Index].cards.splice(targetCard_Index, 0, tempCard);

      setBoards(tempboards);
  };
  const resetBoards = ()=>{
    setBoards([
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
  };
  const addCard = (title, bid)=>{

      const card={
        id: Date.now() + Math.random(),
          tasks: [],
          labels:[{
              text: "default label",
              color: "green"
            }],
          desc:title,
          date:"" 
      };

      const index = boards.findIndex((item)=> item.id === bid);
      if(index<0) return;

      const tempBoards = [...boards];
      tempBoards[index].cards.push(card);
      setBoards(tempBoards);
       

  };

  const removeCard =(cid, bid)=>{

    const index = boards.findIndex((item)=> item.id === bid);
    if(index<0) return;

    const tempBoards = [...boards];
    const cardIndex = tempBoards[index].cards.findIndex((item)=> item.id === cid)

    if(cardIndex<0) return;

    tempBoards[index].cards.splice(cardIndex, 1);
    setBoards(tempBoards);

  };

  const addBoard = (title)=>{

    setBoards([ ...boards, {
        id: Date.now() + Math.random(),
        title:title,
        cards:[]
      }
    ])

  };

  const removeBoard=(bid)=>{
    const tempBoards= boards.filter(item=> item.id!==bid);

    setBoards(tempBoards);
  };

  const searchCard =(ctitle)=>{
    var boardIndex = 0;
    boards.forEach((item)=>{
     const card= item.cards.filter((c)=>c.desc===ctitle);
    if(card.length!=0 && card!=[]){
     boardIndex=item.id;
     return;
    }
  });
    if (boardIndex<0 || boardIndex===undefined) return;

   const tempBoard = boards.filter((b)=>b.id===boardIndex);
   const tempCard  = tempBoard[0].cards.filter((c)=>c.desc===ctitle);
   tempBoard[0].cards = tempCard;
   
   setBoards(tempBoard);


  }

  
  const doCloseHandler=()=>{
   
    resetBoards();
  }
  return (
    <div className="app">
     
         <Header/>
         <div className="app_navbar">
          <Editable
              displayClass="app_boards_board_add" 
              buttonText="Search Card"
              placeholder="Enter Card Title"
              onSubmit={(cardTitle)=>searchCard(cardTitle)} onReset={()=>resetBoards()}
              />
              <button  className="reset-boards-btn" onClick={()=>doCloseHandler()}>Reset boards</button>
      </div>

      <div className="app_outer">
        <div className="app_boards">
          {
            boards.map((board)=>{ 
              return <div>
              <Board key={board.id} board={board} 
                    addCard={(cardTitleValue, id)=>addCard(cardTitleValue, id)} 
                    delBoard={(id)=>{removeBoard(id)} }
                    delCard={(cid, bid)=>{removeCard(cid, bid)} } 
                    handleDragEnd={handleDragEnd}
                    handleDragEnter={handleDragEnter}
                    /> 
              </div>;
          }
            )
          }
            
             <div className="app_boards_board">
               
             <Editable
              displayClass="app_boards_board_add" 
              buttonText="Add Board"
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
