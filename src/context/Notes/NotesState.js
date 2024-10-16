import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "670fe7eaeda3d156bb8d3c0a6e",
          "user": "670fe7ace3d156bb8d3c0a6b",
          "title": "My Ttile",
          "description": "Emma Watson is my Love",
          "tag": "Lover",
          "date": "2024-10-16T16:20:58.416Z",
          "__v": 0
        },
        {
          "_id": "670fe8a05e3d156bb8d3c0a70",
          "user": "670fe7ace3d156bb8d3c0a6b",
          "title": "My Ttile is Emma",
          "description": "I want to marry with her",
          "tag": "Lover tag",
          "date": "2024-10-16T16:21:25.249Z",
          "__v": 0
        },
        {
            "_id": "670fe7eae3d156bb8d3ac0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "67a0fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d156bb8d3c0a6ea",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d1w56bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eqae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
      ]

      const [notes,setNotes] = useState(notesInitial)

      //Add a Note
      const addNote = (title,description,tag)=>{
        const note = {
            "_id": "670fe7eqae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          }
        setNotes(notes.push(note))
      }

      //Delete a Note
      const deleteNote = ()=>{
        
      }

      //Edit a Note
      const editNote = ()=>{
        
      }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;