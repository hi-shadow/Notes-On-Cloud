import React, { useContext, useState } from 'react'
import Notecontext from '../context/notes/NoteContext'


const AddNote = () => {
    const context = useContext(Notecontext)
    const { addNote } = context
    const [note, setnote] = useState({ title: "", description: "", tag: "", date: "" })


    const OnChange = (e) => {
        const { name, value } = e.target
        setnote({ ...note, [name]: value })
    }

    const SubmitForm = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag, note.date)
        setnote({ title: "", description: "", tag: "", date: "" })
    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='fw-bolder d-flex mb-2 align-items-center fs-5'>
                                    Add Note
                                </p>
                                <button type="button" className="btn-close mb-2" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <hr className=' text-black m-0 mb-2 ' />
                            <div className="my-2">
                                <label htmlFor="exampleInputEmail1" className="form-label">Note Title :</label>
                                <input onChange={OnChange} name='title' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="my-2 mb-1">
                                <label htmlFor="exampleInputPassword1" className="form-label">Note Description :</label>
                                <textarea onChange={OnChange} name='description' className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="d-flex row align-items-center ">
                                <div className="col-md-6">
                                    <div className="my-2 mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Note Tags</label>
                                        <input onChange={OnChange} name='tag' className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-2 mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Note Date</label>
                                        <input onChange={OnChange} type="text" name="date" className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <button type="button" className="btn btn-dark  text-center btn-block" onClick={SubmitForm} data-mdb-dismiss="modal">Add Note</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddNote
