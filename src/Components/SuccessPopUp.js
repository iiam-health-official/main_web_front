import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SuccessPopUp({show, onHide}) {
    return (
        <Modal show={show} onHide={onHide} variant="dark">
            <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Congratulations! Your submission was successful. We'll be in contact soon.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SuccessPopUp;