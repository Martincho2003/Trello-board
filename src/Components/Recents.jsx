import { useState } from "react";
import { ListGroup } from 'react-bootstrap';
import { NavBar } from './NavBar';

export function Recents({ appState, setAppState }) {
  const [recents, setRecents] = useState(appState.recentItems);
  console.log(recents)

  return (
    <div>
      <NavBar appState={appState} setAppState={setAppState}/>

      <ListGroup className="my-list">
        <ListGroup.Item disabled>Recently added tasks</ListGroup.Item>
          {recents.map(item => (
            <ListGroup.Item> {item.name} </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  )
}