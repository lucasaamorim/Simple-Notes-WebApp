import { useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [notes, SetNote] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      content: "this is a test to see if the activeNote Hook works",
      edited: Date.now(),
    };
    SetNote([newNote, ...notes]);
  };

  const toggleActiveNote = (target_id) => {
    setActiveNote(activeNote === target_id ? false : target_id);
    if (notes.find((note) => note.id === target_id)) {
      //pass
    } else {
      setActiveNote(false);
    }
  };

  const onDelete = (target_id) => {
    SetNote(notes.filter((note) => note.id !== target_id));
  };
  // On the Making (yet).

  const onEdit = (e, edit_type) => {
    const editedNote = {
      id : activeNote,
      title: edit_type === "title" ? e.target.value : notes.find((note) => note.id === activeNote).title,
      content: edit_type === "content" ? e.target.value : notes.find((note) => note.id === activeNote).content,
      edited: Date.now(),
    }
    SetNote([editedNote, ...notes.filter(note => note.id !== activeNote)])
   }

return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDelete={onDelete}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onToggle={toggleActiveNote}
      />
      <Main notes={notes} activeNote={activeNote} onEdit={onEdit} />
    </div>
  );
}

export default App;
