import Note from "./Note";
// Formated with Prettier
const Sidebar = ({
  notes,
  onAddNote,
  onDelete,
  activeNote,
  setActiveNote,
  onToggle,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Notes</h1>
        <div className="sidebar-add-note">
          <p onClick={onAddNote}>Add</p>
        </div>
      </div>
      {notes ? (
        notes.map((note) => {
          return (
            <Note
              note={note}
              onDelete={onDelete}
              setActiveNote={setActiveNote}
              activeNote={activeNote}
              onToggle={onToggle}
            />
          );
        })
      ) : (
        <p>No Notes, Please Create One.</p>
      )}
    </div>
  );
};

export default Sidebar;
