import { create } from "zustand";

type note = {
  id: string;
  title: string;
  description: string;
  dateCreated: Date;
};

interface NotesStoreState {
  notes: note[];
  addNote: (note: note) => void;
  getNote: (id: string) => note;
}

const useNotesStore = create<NotesStoreState>((set, get) => ({
  notes: [],
  addNote: (newNote: note) =>
    set((state) => ({
      notes: [...state.notes, newNote],
    })),
  getNote: (id) => get().notes.filter((note) => note.id == id)[0],
}));

export default useNotesStore;
