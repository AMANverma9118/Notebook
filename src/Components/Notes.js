import React, { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import NoteItem from './NoteItem';


const Notes = () => {

    const context = useContext(NoteContext);
    const { notes,addNote} = context;

    return (
        <div>
            <div className="row my-3">
                <h1>Your Note</h1>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} note={notes}/>;
                })}
            </div>
        </div>
    )
}

export default Notes
