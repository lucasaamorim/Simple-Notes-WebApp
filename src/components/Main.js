import TextareaAutosize from "react-textarea-autosize";

const Main = ({ activeNote, notes, onEdit }) => {
  
  const activeNoteInfo = notes.find((note) => note.id === activeNote)
  
  return (
    <div className="main">
      <div className="note-form">
        <div className="title-input-container">
          <input
            type="text"
            name="title"
            className="title-input"
            value={
              activeNote
                ? activeNoteInfo &&
                  activeNoteInfo.title
                : "Untitled"
            }
            onChange={ e => onEdit(e, 'title')}
          />
        </div>
        <div className="note-container">
          <TextareaAutosize
            name="content"
            autoFocus
            id="note"
            minRows="10"
            maxRows="15"
            placeholder="Write Your Note here..."
            value={
              activeNote
                ? activeNoteInfo &&
                  activeNoteInfo.content
                : ""
            } 
            onChange={ e => onEdit(e, 'content')}
          />
        </div>
      </div>
      <div className="markdown-preview">
          <div className="title-container">
            <h1 className="title"> {activeNote ? activeNoteInfo.title : "Untitled"} </h1>
          </div>
          <div className="body-container">
            <p className="body">{activeNote ? activeNoteInfo.title : "Untitled"}</p>
          </div>
        </div>
    </div>
  );
};

export default Main;
