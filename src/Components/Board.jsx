import { useState } from "react";
import Popup from 'reactjs-popup';
import { NavBar } from './NavBar';
import styled from 'styled-components'
import dataset from './dataset'
import Column from './Column.jsx'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    display : flex;
`


export function Board({ appState, setAppState }) {
  const [board, setBoard] = useState(appState.boards[appState.currentBoard]);

  const [data, setData] = useState(dataset)

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    //If there is no destination
    if (!destination) {return}
    
    //If source and destination is the same
    if (destination.droppableId === source.droppableId && destination.index === source.index) { return }
    
    //If you're dragging columns
    if (type === 'column') {
        const newColumnOrder = Array.from(data.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
        const newState = {
            ...data,
            columnOrder: newColumnOrder
        }
        setData(newState)
        return;
    }

    //Anything below this happens if you're dragging tasks
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //If dropped inside the same column
    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...start,
            taskIds: newTaskIds
        }
        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn
            }
        }
        setData(newState)
        return;
    }

    //If dropped in a different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds
    }
    
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds
    }

    const newState = {
        ...data,
        columns: {
            ...data.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    }

    setData(newState)
  }

  let newName = '';

  const changeName = (e) => {
    newName = e.target.value;
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


      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='all-columns' direction='horizontal' type='column'>
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {data.columnOrder.map((id, index) => {
                const column = data.columns[id]
                const tasks = column.taskIds.map(taskId => data.tasks[taskId])

                return <Column key={column.id} column={column} tasks={tasks} index={index} />
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext> */}
    </div>
  )
}