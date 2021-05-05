import Note from "./Note";

const Sidebar = ({
  notes,
  onAddNote,
  onDelete,
  activeNote,
  setActiveNote,
  onToggle,
  empty,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Notes</h1>
        <div className="sidebar-add-note">
          <p onClick={onAddNote}>Add</p>
        </div>
      </div>
      { !(empty) && (notes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              onDelete={onDelete}
              setActiveNote={setActiveNote}
              activeNote={activeNote}
              onToggle={onToggle}
            />
          );
        })
      )}
      {empty && <h1>No notes, please create one</h1>}
    </div>
  );
};

export default Sidebar;
