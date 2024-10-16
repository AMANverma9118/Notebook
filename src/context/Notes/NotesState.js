import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "670fe7eae3d156bb8d3c0a6e",
          "user": "670fe7ace3d156bb8d3c0a6b",
          "title": "My Ttile",
          "description": "Emma Watson is my Love",
          "tag": "Lover",
          "date": "2024-10-16T16:20:58.416Z",
          "__v": 0
        },
        {
          "_id": "670fe805e3d156bb8d3c0a70",
          "user": "670fe7ace3d156bb8d3c0a6b",
          "title": "My Ttile is Emma",
          "description": "I want to marry with her",
          "tag": "Lover tag",
          "date": "2024-10-16T16:21:25.249Z",
          "__v": 0
        },
        {
            "_id": "670fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
          {
            "_id": "670fe7eae3d156bb8d3c0a6e",
            "user": "670fe7ace3d156bb8d3c0a6b",
            "title": "My Ttile",
            "description": "Emma Watson is my Love",
            "tag": "Lover",
            "date": "2024-10-16T16:20:58.416Z",
            "__v": 0
          },
      ]

      const [notes,setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;