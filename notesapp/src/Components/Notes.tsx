import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";

interface INotesProps {
    notes: NoteObject[]
}


const Notes: React.FC = ({ notes }) => {

    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            <Box>
                {
                    notes.map(note => (

                    ))
                }
            </Box>
        </Box>
    )
}

export default Notes;