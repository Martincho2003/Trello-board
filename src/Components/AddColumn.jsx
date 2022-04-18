import { useState } from "react";
import { Button, Modal} from 'react-bootstrap';

export function AddColumn({ appState, setAppState}) {

    const [board, setBoard] = useState(appState.boards[appState.currentBoard]);

    let newName = '';

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
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onName = (e) => {
        newName = e.target.value;
    }
    const formSubmit = (e) => {
        e.preventDefault();
        addColumn();
        handleClose();
    }
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Add Column
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="auth-wrapper modal_body">
                <div className="auth-inner">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required onChange={onName}/>
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

