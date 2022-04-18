import { useState } from "react";
import Popup from 'reactjs-popup';
import Column from "./Column";
import { NavBar } from './NavBar';

export function Board({ appState, setAppState }) {
  const [board, setBoard] = useState(appState.boards[appState.currentBoard]);

  let newName = '';

  function changeName(name){
   let letter = name.nativeEvent.data
    if(letter){
      newName += name.nativeEvent.data
    } else {
      newName = newName.slice(0, -1);
    }
  }

  function addColumn() {
    let newColumn = {
        name: newName,
        items: []
        }
    board.columns.push(newColumn);
    setAppState({
      ...appState, 
      boards: [...appState.boards]
    })
  }

  

  return(
    <div>
      <NavBar appState={appState} setAppState={setAppState}/>
      <p>{ board.name }</p>
      <Popup trigger={<button>Add column</button>} position="right center">
        <input type="text" onChange={(name) => changeName(name)} />
        <button onClick={addColumn}>Add</button>
      </Popup>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <tbody>
          {board.columns.map((column, key) =>
            <Column appState={appState} setAppState={setAppState} id={key} />
          )}
        </tbody>
      </div>
    </div>
  )
}