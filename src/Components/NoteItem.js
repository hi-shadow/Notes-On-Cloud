import React, { useContext } from 'react'
import Notecontext from '../context/notes/NoteContext'

const NoteItem = (props) => { 
    const { note, UpdateNote } = props

    const context = useContext(Notecontext)
    const { deleteNote, } = context
    return (
        <>
            {/* eslint-disable */}
            <div className="card ">
                <div className="card-body ">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>

                        <span className="card-text">{note.date}</span>
                        <div>
                            <a className="text-info" style={{ cursor: "pointer" }} onClick={() => { UpdateNote(note) }}><i className="fas fa-pencil-alt me-3 text-warning"></i></a>
                            <a className='text-info' style={{ cursor: "pointer" }} onClick={() => { deleteNote(note._id) }}><i className="fas fa-trash-alt text-danger"></i></a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default NoteItem
