import { Box } from "@mui/material";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {

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
