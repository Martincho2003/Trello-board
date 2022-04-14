import { useState } from 'react';
import Popup from 'reactjs-popup';

export function Home({ appState, setAppState}) {

  const [boards, setBoards] = useState(appState.boards);

  let newName = '';

  console.log(boards);

  function changeName(name){
   let letter = name.nativeEvent.data
    if(letter){
      newName += name.nativeEvent.data
    } else {
      newName = newName.slice(0, -1);
    }
  }

  function addDashboard() {
    let newDashboard = {
        name: newName,
        columns: []
        }
    boards.push(newDashboard);
    setAppState({
      ...appState, 
      boards: boards
    })
  }

  return(
    <div>
      <div className="menu" style={{display: "flex", width: "100%"}}>
        <h2>Trello</h2>
        <a href="/dashboards">Dashboards</a>
        <a href="/recents">Recently addded tasks</a>
        <Popup trigger={<button>Add dashboard</button>} position="right center">
          <input type="text"  onChange={(name) => changeName(name)} />
          <button onClick={addDashboard}>Add</button>
        </Popup>
      </div>
    </div>
  )
}