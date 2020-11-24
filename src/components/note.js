import React, { Component } from 'react';
import './note.css'

export default class Note extends Component {


    handleClick(index) {
        console.log(e.target);
        if (window.confirm('Are you sure you want to delete this note?'))
            this.props.onDelete(index);
    }


    render() {
        const { note, title, date, index } = this.props;


        return (
            <li className='note'>
                <button
                    className='closebtn'
                    type='submit'
                    onClick={() => this.handleClick(index)}> &times;</button>
                <p className='note-title'>{title}</p>
                <p>{note}</p>
                <p className='note-date'>Created on: {date}</p>
            </li>
        )

    }

}