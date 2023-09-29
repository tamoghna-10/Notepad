// components/NotepadPage.js

import React, { useState } from 'react';

function NotePad() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    setNotes([...notes, note]);
    setNote('');
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Notepad</h2>
      <div>
        <textarea value={note} onChange={handleNoteChange} />
        <br />
        <button type="button" onClick={handleAddNote}>Add Note</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            <p>{note}</p>
            <button type="button" onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotePad;
