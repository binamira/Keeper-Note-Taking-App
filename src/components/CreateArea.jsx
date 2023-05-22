import React, { useState } from "react";



function CreateArea(props) {
  // created this hook so the title and content areas can be updated as a complex state
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // we will use the handlechange function to detect and update cahnges made in the input areas

  function handleChange(e) {
    // object destructuring
    const { name, value } = e.target;

    //updating the note hook object
    setNote(prevNote => {
      return {
        //spreading the previous items in the note object
        ...prevNote,
        // the value will be updated to whichever input area was updated
        [name]: value
      };
    });
  }

  //submitNote function will be called when the "Add" button is clicked
  function submitNote(e) {

    //creating a function that will be called in the parent component when the "Add" button is clicked
    props.onAdd(note);

    //clears the inpur areas after submit
    setNote({
      title: "",
      content: ""
    });

    //prevents the default action of forms ,so the form won't submit and reload the page
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}

          //controlled value
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}

          //controlled value
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
