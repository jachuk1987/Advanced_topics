import { Box } from "@mui/material";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState();

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote />
        <Notes />
      </Box>
    </>
  );
}

export default App;
