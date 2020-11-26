import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//mymoday
// en el props, entregar tambien un update, es un metodo. YA
// en la nota tengo que pasarle handle update a la nota, recibe un string como parametro. 
// text field button, submit onsubmit se llama al metodo props.onupdate (valor del textfield)

//note
// handle update, recibe string, setstate del contenido de la nota. 


export default function MyModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update title</Modal.Title>
                    <Form onSubmit={props.OnSumbit}>
                        <Form.Control
                            type='textarea'
                            placeholder={props.title}
                            onChange={props.saveChangesTitle}
                        // id='updated=title'
                        // value={this.state.title}
                        />
                    </Form>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        Update note
                        <Form.Control
                            type='textarea'
                            placeholder={props.note}
                            onChange={props.saveChangesNote}
                        // id='updated=title'
                        // value={this.state.title}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onClose}>
                            Close
            </Button>
                        <Button variant="primary" onClick={props.onSubmit}>
                            Save Changes
            </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    );
}
