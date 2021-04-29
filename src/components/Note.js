const Note = ({note, onDelete, activeNote, setActiveNote, onToggle}) => {
    
    const options = { weekday: 'long', hour:'2-digit', minute:'2-digit' , year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <div onClick={() => onToggle(note.id)} className={note.id === activeNote ? "active note" : "note"}>
            <div className="note-container">
                <strong className="note-title">{note.title}</strong>
                <div className="note-delete" onClick={() => onDelete(note.id)}>
                    <p>Delete</p>
                </div>
            </div>
            <p className="last-edited">{new Date(note.edited).toLocaleDateString('en-GB', options)}</p>
        </div>
    )
}

export default Note
