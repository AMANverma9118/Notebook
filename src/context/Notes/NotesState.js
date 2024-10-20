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
    const note = await response.json();
    setNotes(notes.concat(note))
    
  }

  //Delete a Note
  const deleteNote = async (_id) => {

    //API call
    const response = await fetch(`${host}/api/notes/deletenotes/${_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTRlMzhmMGE0YmVmYzBkMzhlNDEwIn0sImlhdCI6MTcyOTE4NzQwNn0.Yf_aTgRFbHuVw6stsokrzpx7zC4RUjwNAoIJZS_CyUw'
      }
    });
    const json = response.json();

    const newNotes = notes.filter((note)=>{return note._id !== _id})
    setNotes(newNotes)

  }

  //Edit a Note
  const editNote = async (_id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenotes/${_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcxMTRlMzhmMGE0YmVmYzBkMzhlNDEwIn0sImlhdCI6MTcyOTE4NzQwNn0.Yf_aTgRFbHuVw6stsokrzpx7zC4RUjwNAoIJZS_CyUw'
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();


    let newNotes  = JSON.parse(JSON.stringify(notes))

    //Logic to edit a notes
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === _id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }
      
    }
    setNotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}



export default NoteState;