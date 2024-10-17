import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {

    const context = useContext(NoteContext);
    const { notes,getNotes} = context;

    useEffect(()=>{
        getNotes()
    },[])

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h1>Your Note</h1>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} note={notes}/>;
                })}
            </div>
        </>
    )
}

export default Notes
