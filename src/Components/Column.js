import React, { useState } from 'react'
import styled from 'styled-components'
import Task from './Task'
import { AddItem } from './AddItem'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width:220px;
    display:flex;
    flex-direction: column;
    background-color:white;
`;
const Title = styled.h3`
    padding: 8px
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
    min-height:100px;
`;

function Column({appState, currentColumn, setAppState}) {
    const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[currentColumn])

    function rend(){
        if (column){
            return (
                <Draggable draggableId={column.name} index={currentColumn}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>{column.name}</Title>
                    <AddItem appState={appState} setAppState={setAppState} id={currentColumn}/>
                    <Droppable droppableId={column.name} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {column.items.map((item, index) => <Task appState={appState} currentColumn={currentColumn} currentTask={index} />)}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
            )
        }
        else {
            return (<div></div>)
        }
    }

    return rend()
}
export default Column