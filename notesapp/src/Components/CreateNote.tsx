import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";

const Container = styled(Box)`
    & > * {
        margin-right: 20px 20px 20px 0;
    }
    & > div > input[type="text] {
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width: 300px;
        padding-right: 25px;
    }
    & > div > input[type="color"]

`

const CreateNote: React.FC = () => {
    return (
        <Container>
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
        </Container>
    )
}

export default CreateNote;