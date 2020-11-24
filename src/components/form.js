import React, { Component } from 'react'
import Note from "./note.js"
import './form.css'

export default class Form extends Component {

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
                    <input
                        type='textarea'
                        placeholder='Note title'
                        onChange={(e) => this.UpdateTitle(e)}
                    />

                    <textarea
                        rows="5"
                        cols="30"
                        className='textarea'
                        type='textarea'
                        placeholder='Type note here'
                        onChange={(e) => this.UpdateInputvalue(e)} />

                    <button className='addbtn' onClick={(e) => this.onSubmit(e)}>Add note</button>
                </div>
                <div className='noteswrapper'>
                    {(this.state.notes.length === 0 && <p>Notepad empty</p>)}



                    {this.state.notes.map((element, index) =>
                        < Note note={element} date={this.state.date} key={new Date().getTime()} title={this.state.title} onDelete={this.handleDelete} index={index} />

                    )}
                </div>

            </div>
        )

    }
}