import { useState } from 'react';
import Popup from 'reactjs-popup';
import { Navbar, Container, Nav, Button, Modal, Form} from 'react-bootstrap';


export function NavBar({ appState, setAppState}) {

  const [boards, setBoards] = useState(appState.boards);

  let newName = ''

  function changeName(name){
   let letter = name.nativeEvent.data
    if(letter){
      newName += name.nativeEvent.data
    } else {
      newName = newName.slice(0, -1);
    }
  }

  function addDashboard() {
    console.log("creating a dashboard")
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

  function AddBoard() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (e) => {
      newName = e.target.value;
    }
    const formSubmit = (e) => {
      e.preventDefault();
      addDashboard();
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Board
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Board</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="auth-wrapper form_body">
              <div className="auth-inner">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required onChange={onChange}/>
                  </div>
                  <br></br>
                  <button type="submit" className="btn btn-primary btn-block" onClick={formSubmit}>Create</button>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Trello</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboards">Dashboards</Nav.Link>
              <Nav.Link href="/recents">Recently addded tasks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        <Popup trigger={<button>Add dashboard</button>} position="right center">
          <input type="text"  onChange={(name) => changeName(name)} />
          <button onClick={addDashboard}>Add</button>
        </Popup>
        <AddBoard></AddBoard>
      </Container>
    </Navbar>
  )
}