import React, { Component } from 'react';
import './note.css';
// import Modal from 'react-bootstrap/Modal';
import MyModal from './modal';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            updatedTitle: '',
            updatedNote: '',
            date: '',
        }

    }

    handleDeleteClick(index) {
        // console.log(e.target);
        if (window.confirm('Are you sure you want to delete this note?'))
            this.props.onDelete(index);
    }

    handleShowModal() {
        this.setState({ modalShow: true })
    }

    handleCloseModal() {
        this.setState({ modalShow: false })
    }

    handleNoteUpdate = (e) => {
        this.setState({ updatedNote: e.target.value })
        let date = new Date(Date.now());
        this.setState({ date: date.toDateString() })

    }

    handleTitleUpdate = (e) => {
        this.setState({ updatedTitle: e.target.value })

    }

    handleSubmit = () => {
        const { updatedNote, updatedTitle, date } = this.state;
        const { index } = this.props;
        this.props.onUpdate(updatedTitle, updatedNote, index, date);
        this.setState({ modalShow: false })
    }


    render() {
        const { note, title, date, index, updatedDate } = this.props;

        return (
            <>
                <MyModal show={this.state.modalShow}
                    onClose={() => this.handleCloseModal()}
                    note={note}
                    date={date}
                    title={title}
                    saveChangesNote={(e) => this.handleNoteUpdate(e)}
                    saveChangesTitle={(e) => this.handleTitleUpdate(e)}
                    onSubmit={this.handleSubmit}
                />
                <li className='note' onClick={() => this.handleShowModal()}>
                    <Card
                        border="success"
                        bg={'white'}
                        text={'dark'}
                        style={{ width: '18rem' }}
                        className="mb-2">

                        <Button variant="secondary"
                            className='closebtn'
                            type='submit'
                            onClick={() => this.handleDeleteClick(index)}> &times;</Button>
                        {!updatedDate && <Card.Header>Created on: {date}</Card.Header>}
                        {updatedDate && <Card.Header>Updated on: {updatedDate}</Card.Header>}
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {note}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </li>
            </>
        )

    }

}