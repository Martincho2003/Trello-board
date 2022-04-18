import React, { useState } from "react";
import Popup from "reactjs-popup";

const Column = ({ appState, setAppState, id }) => {
  const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[id]) 
  const [recentItems, setRecentItems] = useState(appState.recentItems);

  let newName = '';
  let newDescription = "asd";

  const changeName = (e) => {
    newName = e.target.value;
  }

  function recentItemCheck() {
    if (recentItems.length == 10){
      recentItems.pop();
    }
  }

  function addItem() {
    let newItem = {
        name: newName,
        description: newDescription
        }
    column.items.push(newItem);
    recentItemCheck();
    recentItems.unshift(newItem);
    setAppState({
      ...appState, 
      boards: [...appState.boards],
      recentItems: recentItems
    })
  }

  function deleteItem(itemTitle){
    const itemColumnId = column.indexOf(column.find(item => item.name == itemTitle));
    const itemRecentId = recentItems.indexOf(recentItems.find(item => item.name == itemTitle));
    column.slice(itemColumnId, 1);
    recentItems.slice(itemRecentId, 1);
    setAppState({
      ...appState, 
      boards: [...appState.boards],
      recentItems: recentItems
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