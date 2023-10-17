import React from "react";
import { useParams } from "react-router-dom";
import useNotesStore from "../../stores/NotesStore";
import "./NotePreview.css";

const NotePreview = () => {
  const { noteID } = useParams();
  const { getNote } = useNotesStore();

  const note = getNote(noteID!);

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="notepreview">
      {note.title == "" ? <h1>No Title</h1> : <h1>{note.title}</h1>}
      <p>{note.dateCreated.toISOString()}</p>
      {note.description == "" ? (
        <p>No Description</p>
      ) : (
        <p>{note.description}</p>
      )}
    </div>
  );
};

export default NotePreview;
