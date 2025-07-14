import { Box, InputBase } from "@mui/material";



const CreateNote: React.FC = () => {
    return (
        <Box>
            <InputBase
                placeholder="Title"
            />

            <InputBase
                placeholder="Details"
            />            
        </Box>
    )
}

export default CreateNote;