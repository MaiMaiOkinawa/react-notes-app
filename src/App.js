import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from "./components/NoteList";
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  //Add new notes in array
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'Bathtub synchronized swimming: Rubber ducky backup dancers!',
    date: '11/05/2023',
  },
  {
    id: nanoid(),
    text: 'Blindfolded taste test: Pickle ice cream, anyone?',
    date: '12/05/2023',
  },
  {
    id: nanoid(),
    text: 'Superhero stroll: Cape on, shout "City is safe!"',
    date: '13/05/2023',
  },
  // {
  //   id: nanoid(),
  //   text: 'This is my new memo!',
  //   date: '08/08/2023',
  // },
  ]);

  //Set up a func for searching texts
  const [searchText, setSearchText] = useState('');

  //Set up dark mode
  const [darkMode, setDarkMode] = useState(false);

  //Upload the saved notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    //If we recive notes successuly
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //Save notes on local storage
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);
  
  //New notes
  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    //Create a new array & add new notes to the end of the array
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  //Delete notes - id of notes should be deleted
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {/* // Blending notes data to Notelist */}
        <NoteList
          // filter input text
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;