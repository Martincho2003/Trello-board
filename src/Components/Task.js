import React, { useState } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    border: 1px solid lightgrey;
    padding:8px;
    margin-bottom:8px;
    border-radius:2px;
    background-color:${props => (props.isDragging ? 'lightgreen' : 'white')};
`
function Task({appState, setAppState, currentColumn, currentTask}) {

    const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[currentColumn])
    const [recentItems, setRecentItems] = useState(appState.recentItems);
    const [item, setItem] = useState(appState.boards[appState.currentBoard].columns[currentColumn].items[currentTask])

    function deleteItem(itemTitle){
        const itemColumnId = column.items.indexOf(column.items.find(item => item.name == itemTitle));
        column.items.slice(itemColumnId, 1);
        if (recentItems.find(item => item.name == itemTitle) != undefined){
          const itemRecentId = recentItems.indexOf(recentItems.find(item => item.name == itemTitle));
          recentItems.slice(itemRecentId, 1);
        }
        setAppState({
          ...appState, 
          boards: [...appState.boards],
          recentItems: recentItems
        })
      }

      function editItem(oldItemTitle, newItemTitle, itemDescription){
        const itemColumnId = column.items.indexOf(column.items.find(item => item.name == oldItemTitle));
        column.items[itemColumnId].name = newItemTitle;
        column.items[itemColumnId].description = itemDescription;
        if (recentItems.find(item => item.name == oldItemTitle) != undefined){
          const itemRecentId = recentItems.indexOf(recentItems.find(item => item.name == oldItemTitle));
          recentItems[itemRecentId].name = newItemTitle;
          recentItems[itemRecentId].description = itemDescription;
        }
        setAppState({
          ...appState, 
          boards: [...appState.boards],
          recentItems: recentItems
        })
      }

    function rend() {
        if (item) {
            return (
            <Draggable draggableId={item.name} index={currentTask}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {item.name}
                </Container>
            )}
        </Draggable>
            )
        } else {
            return (<div></div>)
        }
    }

    return rend()
}

export default Task