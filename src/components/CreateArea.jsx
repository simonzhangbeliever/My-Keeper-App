import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const [isExpand, setIsExpand] = useState(false)
 
  function handleChange(event) {

    const {name, value} = event.target;

    setNewNote(prevValue => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function handleInputClick() {
    setIsExpand(true);
  }

  function handleClick(event) {

    event.preventDefault(); //prevent the entire reloading of the page
  }

  return (
    <div>
      <form onSubmit={handleClick} className="create-note">
        {isExpand && <input name="title" placeholder="Title" onChange={handleChange} value={newNote.title} />}
        <textarea name="content" placeholder="Take a note..." onChange={handleChange} onClick={handleInputClick} value={newNote.content} rows={isExpand? "3": "1"} />
        <Zoom in={isExpand}>
          <Fab type="submit" onClick={() => {
            props.onAdd(newNote);
            setNewNote({
              title: "",
              content: ""
            });
            }}>
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
