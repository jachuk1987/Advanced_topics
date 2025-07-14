import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";

const Container = styled(Box)`

`

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
            <Box component="span">50</Box>
            <InputBase
                type="color"
                defaultValue={"#F5F5F5"}
                placeholder="Choose color"
            />
            <Button variant="outlined">Create</Button>
        </Box>
    )
}

export default CreateNote;