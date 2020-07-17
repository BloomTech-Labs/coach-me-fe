import React, { useState } from 'react';
import apiCall from '../../utils/api';

const SessionNotes = props =>  {
    const [note, updateNote] = useState('');
    const handleChange = event => {
        updateNote(event.target.value);
    }
    const handleSubmit = async () => {
        await apiCall().post(`${process.env.REACT_APP_BACKEND}/client/46b97b6f-f3bf-494a-a840-44d3393d376f/sessions`,
                    {
                    session_date: "July 16, 2021",
                    notes: note,
                    coach_id: "659918be-887a-4ce7-a5c7-29434aeb1cb7",
                    client_id: "46b97b6f-f3bf-494a-a840-44d3393d376f"
                    });
        alert(' Session Note Updated');
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