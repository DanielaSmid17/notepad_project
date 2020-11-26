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
            InputTitle: '',
            date: '',
            notes: [], // [{title: "mytitle", content: "mycontent"}, {title: "mytitl2e2", content: "mycontent2"}]
            updatedDate: '',

        }

    }
    UpdateInputvalue(e) {
        const value = e.target.value
        this.setState({ InputValue: value })
        let date = new Date(Date.now());
        this.setState({ date: date.toDateString() })
        //.toLocaleDateString()


    }
    UpdateTitle(e) {
        console.log("update title", e.target);
        const title = e.target.value;
        this.setState({ InputTitle: title });
    }

    onSubmit(e) {
        console.log('on submit', e.target);
        e.preventDefault();
        const notesCopy = [...this.state.notes]
        if (this.state.InputValue)
            notesCopy.push({ title: this.state.InputTitle, content: this.state.InputValue, date: this.state.date })
        this.setState({ notes: notesCopy });
        this.setState({ InputValue: '', InputTitle: '' })


    }
    handleDelete = (index) => {

        const deleteCopy = [...this.state.notes]
        console.log(deleteCopy);
        deleteCopy.splice(index, 1)
        console.log(deleteCopy);
        this.setState({ notes: deleteCopy })

    }

    handleModalUpdate = (newTitle, newContent, index, date) => {
        const notesCopy = [...this.state.notes]
        if (newTitle)
            notesCopy[index].title = newTitle;
        if (newContent)
            notesCopy[index].content = newContent;
        this.setState({ notes: notesCopy })
        this.setState({ updatedDate: date })

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
                            value={this.state.InputTitle}
                        />

                        <Form.Control
                            as="textarea" rows={3}

                            cols="30"
                            className='textarea'
                            type='textarea'
                            placeholder='Type note here'
                            onChange={(e) => this.UpdateInputvalue(e)}
                            id='note'
                            value={this.state.InputValue}
                        />

                        <Button variant="dark" onClick={(e) => this.onSubmit(e)}>Add note</Button>
                    </Form>
                </div>
                <div className='noteswrapper'>
                    {/* {(this.state.notes.length === 0 && <p className='empty'>Notepad empty</p>)} */}
                    {this.state.notes.map((element, index) =>
                        < Note note={element.content}
                            date={element.date}
                            key={index}
                            title={element.title}
                            onDelete={this.handleDelete}
                            index={index}
                            updatedDate={this.state.updatedDate}
                            onUpdate={this.handleModalUpdate}

                        />
                    )}
                </div>

            </div>
        )

    }
}