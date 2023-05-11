import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({notes, handleAddNote,handleDeleteNote}) => {
  return (
    <div className="notes-list">
      {/* Display updated notes so you don't need to hardcode notes */}
      {/* Pass in id, text & date to the Note component */}
      {notes.map((note) =>
        <Note
        id={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote} 
        />)}
      <AddNote handleAddNote={handleAddNote} />
  </div>
  );
}

export default NoteList;