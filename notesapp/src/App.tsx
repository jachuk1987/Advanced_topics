import { Box } from "@mui/material";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import { useState } from "react";
import { NoteObject } from "./models/note";

function App() {

  const [notes, setNotes] = useState<NoteObject[]>([]);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
  }

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} />
      </Box>
    </>
  );
}

export default App;
