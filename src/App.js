import { useState, useEffect } from "react";
import uuid from "react-uuid";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [notes, SetNote] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []);
  const [activeNote, setActiveNote] = useState(false);
  
  const notes_is_empty = (notes === []);

 if (notes_is_empty) {
   localStorage.setItem('notes', notes)
 }


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      content: "",
      edited: Date.now(),
    };
    SetNote([newNote, ...notes]);
  };

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
  })


  const toggleActiveNote = (target_id) => {
      setActiveNote(activeNote === target_id ? false : target_id);
  };


  const onDelete = (target_id) => {
    SetNote(notes.filter((note) => note.id !== target_id));
  };


  const onEdit = (e, edit_type) => {
    const activeNoteInfo = notes.find((note) => note.id === activeNote);
    const editedNote = {
      id: activeNote,
      title: [
        edit_type === "title" ? e.target.value : activeNoteInfo.title ],
      content: [
        edit_type === "content" ? e.target.value : activeNoteInfo.content ],
      edited: Date.now(),
    };
    SetNote([editedNote, ...notes.filter((note) => note.id !== activeNote)]);
  };

  const getActiveNote = () => {
    const activeNoteInfo = notes.find((note) => note.id === activeNote);
    if (activeNote === false) {
      //pass
    }else if (typeof activeNoteInfo === 'undefined') {
      setActiveNote(false);
    }else { return(activeNoteInfo); }
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
        empty={notes_is_empty}
      />
      <Main activeNoteInfo={getActiveNote()} activeNote={activeNote} onEdit={onEdit}/>
    </div>
  );
}

export default App;
