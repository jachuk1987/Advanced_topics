import { Box } from "@mui/material";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";

function App() {

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote />
      </Box>
    </>
  );
}

export default App;
