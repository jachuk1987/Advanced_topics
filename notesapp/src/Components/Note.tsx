import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import styled from "@emotion/styled";

interface INotesProps {
  note: NoteObject,
  deleteNote: (id: number) => void
}

const StyledCard = styled(Card)`
    width: 400px;
    margin:20px;
`;

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff;
        margin-top: 5px;
    }
`

const Note: React.FC<INotesProps> = ({ note, deleteNote }) => {
  return (
    <StyledCard style={{ backgroundColor: note.color, margin: 10 }}>
      <CardContent>
        <Box>
          <Typography variant="h6">{note.title}</Typography>
          <Typography variant="body2">{note.details}</Typography>
          <Typography variant="caption">{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNote(note.id)}>Delete</Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
