import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, ListGroup} from 'react-bootstrap';
import { NavBar } from './NavBar';

export function Boards({ appState, setAppState }) {
  const [boards, setBoards] = useState(appState.boards);

  function changeCurrentBoard(clickedBoard) {
    for (let i=0; i<boards.length; i++) {   
      if (clickedBoard == boards[i].name){
        setAppState({
          ...appState, 
          currentBoard: i
        })
        break;
      }
    }
    navigate('/dashboard')
  }

  const navigate = useNavigate()

  useEffect(() => {
    setAppState({
      ...appState, 
      currentBoard: null
    })
  }, [setBoards])

  return (
    <div>
      <NavBar appState={appState} setAppState={setAppState}/>

          
      <ListGroup className="my-list">
        <ListGroup.Item disabled>Your Boards</ListGroup.Item>
        {boards.map(board => (
            <ListGroup.Item>
              <Button className="flex-button" variant="primary" key={board.name} onClick={() => changeCurrentBoard(board.name)}>{board.name}</Button>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  )
}