import TextareaAutosize from "react-textarea-autosize";

//markdown support
import sanitizeHtml from "sanitize-html";
import marked from "marked";
import ReactHtmlParser from 'react-html-parser'

const Main = ({ activeNoteInfo, activeNote, onEdit }) => {
  const marked_options = {
    breaks: true,
    headerIds: false,
  };
  return (
    <div className="main">
      <div className="note-form">
        <div className="title-input-container">
          <input
            disabled={activeNote ? false : true}
            type="text"
            name="title"
            className="title-input"
            value={
              activeNote ? activeNoteInfo && activeNoteInfo.title : "Untitled"
            }
            onChange={(e) => onEdit(e, "title")}
          />
        </div>
        <div className="note-container">
          <TextareaAutosize
            disabled={activeNote ? false : true}
            name="content"
            autoFocus
            id="note"
            minRows="10"
            maxRows="15"
            placeholder="Write Your Note here..."
            value={activeNote ? activeNoteInfo && activeNoteInfo.content : ""}
            onChange={(e) => onEdit(e, "content")}
          />
        </div>
      </div>
      <div className="markdown-preview">
        <div className="title-container">
          <h1 className="title">
            {activeNote
              ? activeNoteInfo
                ? activeNoteInfo.title
                : "Please Select a Note"
              : "Please Select a Note"}
          </h1>
        </div>
        <div
          className="body-container"
        ></div>
          {
            activeNote &&
            activeNoteInfo &&
            ReactHtmlParser(sanitizeHtml(marked(String(activeNoteInfo.content))))
          }
      </div>
    </div>
  );
};

export default Main;
