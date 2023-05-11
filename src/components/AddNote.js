import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  
  const [noteText, setNoteText] = useState('');
  //Character Limitation - 200
  const characterLimit = 200;


  //Add changes
  const handleChange = (event) => {
    //If the texts are less or equel to character limit,
    //allow to change the texts
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  //Save changes
  const handleSaveClick = () => {
    //To avoid an empty notes
    //Save notes only if some texts exist
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      //Clear the texts after saving
      setNoteText('')
    }
  }

  return (
    <div className="note new">
      <textarea
        rows='8'
        cols='10'
        placeholder="Type to all a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
        <div className="note-footer">
          <small>{characterLimit - noteText.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
      </div>
      )
}

export default AddNote;