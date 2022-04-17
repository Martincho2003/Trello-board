import React, { useState } from "react";
import Popup from "reactjs-popup";

const Column = ({ appState, setAppState, id }) => {
  const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[id])
  console.log(column);
  

  let newName = '';

  function changeName(name){
   let letter = name.nativeEvent.data
    if(letter){
      newName += name.nativeEvent.data
    } else {
      newName = newName.slice(0, -1);
    }
  }

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
        <Popup trigger={<button>Add item</button>} position="right center">
          <input type="text" onChange={(item_name) => changeName(item_name)} />
          <button onClick={addItem}>Add</button>
        </Popup>
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