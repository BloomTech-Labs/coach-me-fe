import React, { useState } from 'react'

const SessionNotes = props =>  {
    const [note, updateNote] = useState('');
    const handleChange = event => {
        updateNote(event.target.value);
    }
    const handleSubmit = () => {
        console.log(note);
    }
    return (
        <div className="form">
            <h2>Session Notes</h2>
            <textarea value={note} onChange={handleChange}></textarea>
            <button onClick={handleSubmit}>Submit Note</button>
        </div>
    )
}


export default SessionNotes;