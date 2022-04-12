import { useEffect, useState } from "react";

export function Board({ appState, setAppState }) {
  const [board, setBoard] = useState(appState.boards[appState.currentBoard]);

  useEffect(() => {
    setAppState({
      ...appState, 
      boards: [...appState.boards, board]
    })
  }, [setBoard])
  
  return (
    <div className="board">
        <p>{ board.name }</p>
    </div>
  )
}