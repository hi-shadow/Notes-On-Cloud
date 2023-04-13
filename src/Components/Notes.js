import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'


const Notes = () => {

    const context = useContext(NoteContext)
    const { notes, getAllNotes, updateNote } = context
    useEffect(() => {
        getAllNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const [note, setnote] = useState({ etitle: "", edescription: "", etag: "", edate: "" })

    const UpdateNote = (currentnote) => {
        ref.current.click();
        setnote({ eid: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag, edate: currentnote.date, })
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setnote({ ...note, [name]: value })

    }
    const SubmitForm = (e) => {
        updateNote(note.eid, note.etitle, note.edescription, note.etag, note.edate)
        e.preventDefault()

    }

    return (
        <>
            <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='fw-bolder d-flex mb-2 align-items-center fs-5'>
                                    Update Note
                                </p>
                                <button type="button" className="btn-close mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <hr className=' text-black m-0 mb-2 ' />
                            <div className="my-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">Note Title :</label>
                                <input onChange={onChange} value={note.etitle} name='etitle' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="my-2 mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label">Note Description :</label>
                                <textarea onChange={onChange} value={note.edescription} name='edescription' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="d-flex row align-items-center ">
                                <div className="col-md-6">
                                    <div className="my-2 mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Note Tags</label>
                                        <input onChange={onChange} value={note.etag} name='etag' className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-2 mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Note Date</label>
                                        <input onChange={onChange} value={note.edate} type="text" name="edate" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <button type="button" className="btn btn-dark  text-center btn-block" onClick={SubmitForm} data-bs-dismiss="modal" aria-label="Close"   >Add Note</button>
                        </div>

                    </div>
                </div>
            </div >
            <div className="row">
                { }
                {notes.length === 0 && <NoteItem note={{
                    title: "No Notes To Display",
                    description: "Add Some Notes To Diisplay here",
                    length: 0

                }} />}
                {

                    notes.map((note) => {
                        return (
                            <div className="col-4 my-2" key={note._id}>
                                <NoteItem note={note} UpdateNote={UpdateNote} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Notes
