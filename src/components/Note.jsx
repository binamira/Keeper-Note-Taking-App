import React from "react";

function Note(props) {

  //the function that will handle what will happen when the DELETE button will be clicked
  const handleClick=()=> {
    //creating an onDelete function that we will be able to send to parent components
    props.onDelete(props.id);
  }

  return (
    <div className="note">
    {/* creating  title and content components that may be updated in the aprent componenet */}
      <h1>{props.title}</h1> 
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
