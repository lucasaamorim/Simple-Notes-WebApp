import TextareaAutosize from 'react-textarea-autosize';

const Main = ({activeNote, notes}) => {
    return (
        <div className='main'>
           <div className="note-form">
                <div className="title-input-container">
                    <input type="text" name='title' className="title-input" value={activeNote ? notes.find( note => note.id === activeNote) && notes.find( note => note.id === activeNote).title : 'Untitled' } /* onChange={} *//>
                </div>
                <div className="note-container">
                    <TextareaAutosize name='content' autoFocus id="note" minRows='10' maxRows='15' placeholder='Write Your Note here...' value={activeNote ? notes.find( note => note.id === activeNote) && notes.find( note => note.id === activeNote).content : ""} /* onChange={() => onEdit()} */ />
                </div>
           </div>
           <div className="markdown-preview">
               
           </div>
        </div>
    )
}

export default Main
