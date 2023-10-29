import { create } from "zustand";
import note from "../types/Note";

interface NotesStoreState {
  notes: note[];
  addNote: (note: note) => void;
  getNote: (id: string) => note;
  updateNote: (note: note) => void;
}

const useNotesStore = create<NotesStoreState>((set, get) => ({
  notes: [],
  addNote: (newNote: note) =>
    set((state) => ({
      notes: [...state.notes, newNote],
    })),
  getNote: (id) => get().notes.filter((note) => note.id == id)[0],
  updateNote: (updatedNote: note) => {
    set((state) => ({
      notes: [
        ...state.notes.map((note) =>
          note.id == updatedNote.id ? updatedNote : note
        ),
      ],
    }));
  },
}));

export default useNotesStore;
