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
    & > div > input[type="color"] {
        width: 40px;
        height: 30px;
        position: relative;
        bottom: -10px;
    }
    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;
    }
`

const CreateNote: React.FC = () => {

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    }

    return (
        <Container>
            <InputBase
                placeholder="Title"
                onChange={(e) => onValueChange(e)}
                name="title"
            />
            <Box component="span">30</Box>
            <InputBase
                placeholder="Details"
                onChange={(e) => onValueChange(e)}
                name="details"
            />
            <Box component="span">50</Box>
            <InputBase
                type="color"
                defaultValue={"#F5F5F5"}
                placeholder="Choose color"
                onChange={(e) => onValueChange(e)}
                name="color"

            />
            <Button variant="outlined">Create</Button>
        </Container>
    )
}

export default CreateNote;