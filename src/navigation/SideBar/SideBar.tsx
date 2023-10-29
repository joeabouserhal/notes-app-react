import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import "./SideBar.css";
import useNotesStore from "../../stores/NotesStore";
import { generateUUID } from "../../utils/generateUUID";
import SideBarNote from "../../components/SideBar/SideBarNote/SideBarNote";

const SideBar = () => {
  const { notes, addNote } = useNotesStore();

  const createNewNote = () => {
    addNote({
      dateCreated: new Date(),
      id: generateUUID(),
      title: "",
      description: "",
    });
  };

  return (
    <div className="sidebar">
      <button className="addNoteButton" onClick={createNewNote}>
        <p>Add Note</p>
        <BsPlus className="text-xl my-auto" />
      </button>
      {notes.map((note) => (
        <SideBarNote id={note.id} title={note.title} key={note.id} />
      ))}
    </div>
  );
};

export default SideBar;
