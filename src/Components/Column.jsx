import React, { useState } from "react";
import Popup from "reactjs-popup";
import { AddItem } from './AddItem'

const Column = ({ appState, setAppState, id }) => {
  const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[id])
  console.log(column);
  

  let newName = '';


  function addItem() {
    let newItem = {
        name: newName,
        description: ""
        }
    column.items.push(newItem);
    setAppState({
      ...appState, 
      boards: [...appState.boards]
    })
  }

  return (
    <div>
      <div className="column-header" style={{display: "flex", flexDirection: "row"}}>
        <h3>{column.name}</h3>
        <AddItem appState={appState} setAppState={setAppState} id={id}/>
      </div>
      <tbody>
        {column.items.map(item =>
          <h5>{item.name}</h5>
          )}
      </tbody>
    </div>
  );
};

export default Column;