import React, { Component } from 'react';
import Note from "./note.js";
import './form.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
export default class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            InputValue: '',
            notes: [],
            date: '',
            title: '',
        }

    }
    UpdateInputvalue(e) {
        const value = e.target.value
        this.setState({ InputValue: value })
        let date = new Date(Date.now());
        this.setState({ date: date.toLocaleDateString() })


    }
    UpdateTitle(e) {
        const title = e.target.value;
        this.setState({ title: title });
    }

    onSubmit(e) {
        e.preventDefault();
        const notesCopy = [...this.state.notes]
        if (this.state.InputValue)
            notesCopy.push(this.state.InputValue)
        this.setState({ notes: notesCopy });
        const titlesCopy = [...this.state.title]
        titlesCopy.push(this.state.title);

        const titleInput = document.getElementById('title');
        titleInput.value = '';
        const noteInput = document.getElementById('note');
        noteInput.value = '';



    }
    handleDelete = (index) => {

        const deleteCopy = [...this.state.notes]
        deleteCopy.splice(index, 1)
        this.setState({ notes: deleteCopy })

    }



    render() {
        return (
            <div className='textarea-wrapper'>
                <div>
                    <Form>

                        <Form.Control
                            type='textarea'
                            placeholder='Note title'
                            onChange={(e) => this.UpdateTitle(e)}
                            id='title'
                        />

                        <Form.Control
                            as="textarea" rows={3}

                            cols="30"
                            className='textarea'
                            type='textarea'
                            placeholder='Type note here'
                            onChange={(e) => this.UpdateInputvalue(e)}
                            id='note' />

                        <Button variant="dark" onClick={(e) => this.onSubmit(e)}>Add note</Button>
                    </Form>
                </div>
                <div className='noteswrapper'>
                    {(this.state.notes.length === 0 && <p className='empty'>Notepad empty</p>)}



                    {this.state.notes.map((element, index) =>
                        < Note note={element} date={this.state.date} key={new Date().getTime()} title={this.state.title} onDelete={this.handleDelete} index={index} />

                    )}
                </div>

            </div>
        )

    }
}