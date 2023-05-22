import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //hook for all the notes that will be added to our app
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // will update the notes array by adding the new note as an item 
    setNotes(prevNotes => {
      //spreading the previous array items
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      //returns an array without the item that was deleted
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* the addNote function will take  the note object from CreateArea because it was sent as a paramter by the onAdd function */}
      <CreateArea onAdd={addNote} />

      {/* will return an array of notes */}
      {notes.map((noteItem, index) => {
        return (
          //the key and id will have a unique value as every item in an array have a unique index
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            //the deleteNote function will take the id of that specific note as a paramter
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
