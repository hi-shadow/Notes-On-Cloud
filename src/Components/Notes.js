import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'


const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getAllNotes } = context
    useEffect(() => {
        getAllNotes()
    }, [])

    return (
        <>
            <div className="row">
                {
                    notes.map((note) => {
                        return (
                            <div className="col-4" key={note._id}>
                                <NoteItem note={note} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Notes
