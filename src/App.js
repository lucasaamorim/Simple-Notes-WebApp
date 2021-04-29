import {useState} from 'react'
import uuid from 'react-uuid'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { findDOMNode } from 'react-dom'


function App() {
  const [notes, SetNote] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      content: 'this is a test to see if the activeNote Hook works',
      edited: Date.now(),
    }
    SetNote([newNote, ...notes]);
  }

  const toggleActiveNote = (target_id) => {
      setActiveNote(activeNote === target_id ? false : target_id)
      if (notes.find(note => note.id === target_id)) {
        //pass
      }
      else {
        setActiveNote(false)
      }
  }

  const onDelete = (target_id) => {
    SetNote(notes.filter(note => note.id !== target_id))
  }
// On the Making (yet).

  // const onEdit = () => {
  //   const editedNote {
  //     id : activeNote,
  //     title : {element.target.nodeName === "TEXTAREA" ? element.target.value: },
  //     content : {element.target.nodeName === "TEXTAREA" ? element.target.value: }
  //   }
  //   SetNote(notes.filter(note => note.id !== activeNote), editedNote)
  // }

  return (
    <div className="App">
      <Sidebar notes = {notes} onAddNote={onAddNote} onDelete={onDelete} activeNote={activeNote} setActiveNote={setActiveNote} onToggle={toggleActiveNote} />
      <Main notes = {notes} activeNote={activeNote} />
    </div>
  );
}

export default App;
