import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host = "http://localhost:8000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)
  //Get all Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTRlMzhmMGE0YmVmYzBkMzhlNDEwIn0sImlhdCI6MTcyOTE4NzQwNn0.Yf_aTgRFbHuVw6stsokrzpx7zC4RUjwNAoIJZS_CyUw'
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)

  }

  //Add a Note
  const addNote = async (title, description, tag) => {

    //API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTRlMzhmMGE0YmVmYzBkMzhlNDEwIn0sImlhdCI6MTcyOTE4NzQwNn0.Yf_aTgRFbHuVw6stsokrzpx7zC4RUjwNAoIJZS_CyUw'
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    console.log("Adding a New note")
    const note = {
      "_id": "670fe7eqae3d156bb8d3c0a6e",
      "user": "670fe7ace3d156bb8d3c0a6b",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-10-16T16:20:58.416Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = (_id) => {
    const newNotes = notes.filter((note) => { return note._id !== _id })
    setNotes(newNotes);
    console.log("Deleting the note with id" + _id)
  }

  //Edit a Note
  const editNote = async (_id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenotes/${_id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTRlMzhmMGE0YmVmYzBkMzhlNDEwIn0sImlhdCI6MTcyOTE4NzQwNn0.Yf_aTgRFbHuVw6stsokrzpx7zC4RUjwNAoIJZS_CyUw'
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit a notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === _id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}



export default NoteState;