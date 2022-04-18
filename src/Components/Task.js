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
function Task({appState, currentColumn, currentTask}) {

    const [item, setItem] = useState(appState.boards[appState.currentBoard].columns[currentColumn].items[currentTask])

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