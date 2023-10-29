import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useNotesStore from "../../stores/NotesStore";
import "./NotePreview.css";

const NotePreview = () => {
  const { noteID } = useParams();
  const { getNote, updateNote } = useNotesStore();

  const note = getNote(noteID!);

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="notepreview">
      <input
        className="title"
        type="text"
        value={note.title}
        onChange={(e) => updateNote({ ...note, title: e.target.value })}
        placeholder="No Title"
      />
      <p>{note.dateCreated.toISOString()}</p>
      <textarea
        className="description"
        value={note.description}
        onChange={(e) => updateNote({ ...note, description: e.target.value })}
        placeholder="Empty Note"
      ></textarea>
    </div>
  );
};

export default NotePreview;
