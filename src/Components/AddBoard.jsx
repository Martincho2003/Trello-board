import { useState } from "react";
import { Button, Modal} from 'react-bootstrap';

export function AddBoard({ appState, setAppState}) {

    const [boards, setBoards] = useState(appState.boards);

    let newName = ''
    let newDescription = ''

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

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onName = (e) => {
        newName = e.target.value;
    }
    const onDescription = (e) => {
        newDescription = e.target.value;
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
            <div className="auth-wrapper modal_body">
                <div className="auth-inner">
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required onChange={onName}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Desctiption" required onChange={onDescription}/>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-block" onClick={formSubmit}>Create</button>
                </form>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

