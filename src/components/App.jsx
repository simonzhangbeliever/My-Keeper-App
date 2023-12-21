import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {

        setNotes(prevValue => [...prevValue, newNote]);

    }

    function deleteNote(note) {

        setNotes(prevValue => {
            const index = prevValue.indexOf(note);
            return prevValue.toSpliced(index, 1);
        });
    }
 
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((notes, index) => <Note 
                key={index}
                title={notes.title}
                content={notes.content}
                note={notes}
                onDelete={deleteNote}
            />)}
            <Footer />
        </div>
    );
}

export default App;

