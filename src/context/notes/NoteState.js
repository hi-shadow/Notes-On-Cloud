import React, { useState } from 'react'
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:8000"
  const InitialNotes = []
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/note/allnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Powered-By": "Express",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjY1YWM4MjdlZWI0YTZjZWM1MjA5In0sImlhdCI6MTY4MTI4NjYzN30.Yh2AMFXL8nV5VcDfzXMbEUa9A51WoP2J9umEJmSaRyE"
      }
    })
    const jsonData = await response.json()
    setnotes(jsonData)
  }

  const [notes, setnotes] = useState(InitialNotes)
  // Adding New Note 

  const addNote = async (title, description, tag, date) => {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjY1YWM4MjdlZWI0YTZjZWM1MjA5In0sImlhdCI6MTY4MTI4NjYzN30.Yh2AMFXL8nV5VcDfzXMbEUa9A51WoP2J9umEJmSaRyE"
      }, body: JSON.stringify({ title, description, tag, date })
    })

    const noters = {
      "_id": "64366691827eeb4a6cec5212",
      "userId": "643665ac827eeb4a6cec5209",
      "title": title,
      "description": description,
      "tag": tag,
      "date": date,
      "__v": 0
    }
    setnotes(notes.concat(noters))
  }

  // Updating An Existing  Note 

  const updateNote = async (_id, title, description, tag, date) => {

    const newNote = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === _id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        newNote[index].date = date;

        break;
      }


    }
    setnotes(newNote)
    const response = await fetch(`${host}/api/note/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjY1YWM4MjdlZWI0YTZjZWM1MjA5In0sImlhdCI6MTY4MTI4NjYzN30.Yh2AMFXL8nV5VcDfzXMbEUa9A51WoP2J9umEJmSaRyE"
      }, body: JSON.stringify({ title, description, tag, date })
    })
    // eslint-disable-next-line
    const jsonData = response.json()
  }

  // Deleteing An Existing Note 

  const deleteNote = async (_id) => {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/note/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzNjY1YWM4MjdlZWI0YTZjZWM1MjA5In0sImlhdCI6MTY4MTI4NjYzN30.Yh2AMFXL8nV5VcDfzXMbEUa9A51WoP2J9umEJmSaRyE"
      }

    })
    const newNote = notes.filter((note) => {
      return note._id !== _id
    })
    setnotes(newNote)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState