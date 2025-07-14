import { Box, InputBase } from "@mui/material";



const CreateNote: React.FC = () => {
    return (
        <Box>
            <InputBase
                placeholder="Title"
            />
            <Box component="span">30</Box>
            <InputBase
                placeholder="Details"
            />
            <Box component="span">30</Box>
        </Box>
    )
}

export default CreateNote;