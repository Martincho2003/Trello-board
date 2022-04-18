import { useState } from "react";
import { Button, Modal} from 'react-bootstrap';

export function AddItem({ appState, setAppState, id }) {

    const [column, setColumn] = useState(appState.boards[appState.currentBoard].columns[id]);

    let newName = '';
    let newDescription = '';

    function addItem() {
        let newItem = {
            name: newName,
            description: newDescription
            }
        column.items.push(newItem);
        setAppState({
        ...appState, 
        boards: [...appState.boards]
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
        addItem();
        handleClose();
    }
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Add Task
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
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

