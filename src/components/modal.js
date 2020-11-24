import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//mymoday
// en el props, entregar tambien un update, es un metodo. 
// en la nota tengo que pasarle handle update a la nota, recibe un string como parametro. 
// text field button, submit onsubmit se llama al metodo props.onupdate (valor del textfield)

//note
// handle update, recibe string, setstate del contenido de la nota. 


export default function MyModal(props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Title: {props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Note: {props.note}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
            </Button>
                <Button variant="primary" onClick={props.onClose}>
                    Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
}
