import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
      <tbody>
        {boards.map(board => (
          <button key={board.name} onClick={() => changeCurrentBoard(board.name)}>{board.name}</button>
        ))}
      </tbody>
    </div>
  )
}