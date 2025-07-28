import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import Note from "./Note";

interface INotesProps {
    notes: NoteObject[]
}


const Notes: React.FC<INotesProps> = ({ notes }) => {

    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            <Box>
                {
                    notes.map(note => (
                        <Note />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Notes;