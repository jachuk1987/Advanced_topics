import { Box, Typography } from "@mui/material";


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