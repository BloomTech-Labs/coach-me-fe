import React, { useState, useRef } from 'react';
import apiCall from '../../utils/api';
import { setNestedObjectValues } from 'formik';

const SessionNotes = (props) => {
    const [note, updateNote] = useState('');
    const [noteList, setNoteList] = useState([]);
    const notesContainer = useRef() 
    const handleChange = (event) => {
        updateNote(event.target.value);
       
    };
    const handleSubmit = async () => {
        setNoteList([
            ...noteList,
            {note}
        ])
        updateNote('')
        notesContainer.current.scrollTop = notesContainer.current.scrollHeight;
        // updateNote((note) => '');
        // try {
        //     await apiCall().post(
        //         `${process.env.REACT_APP_BACKEND}/client/46b97b6f-f3bf-494a-a840-44d3393d376f/sessions`,
        //         {
        //             session_date: 'July 16, 2021',
        //             notes: note,
        //             coach_id: '659918be-887a-4ce7-a5c7-29434aeb1cb7',
        //             client_id: '46b97b6f-f3bf-494a-a840-44d3393d376f',
        //         }
        //     );
        // } catch (err) {
        //     console.log(err);
        // }
    };
    return (
        <div className="session-notes">
            <div ref={notesContainer} className="notes-container">
                {noteList.map((note, index) => {
                    return (
                        <div key={index} className="note-bubble animate__animated animate__fadeInUpBig">
                            {note.note}
                        </div>
                    );
                })}
            </div>
            <textarea
                placeholder="Start writing a note :)"
                value={note}
                onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>
                <i className="fas fa-paper-plane"></i>
            </button>
        </div>
    );
};

export default SessionNotes;
