import styled from "@emotion/styled";
import { Box, Button, InputBase } from "@mui/material";
import { title } from "process";
import { useState } from "react";
import { NoteObject } from "../models/note";

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
const defaultObj = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: (new Date().toLocaleString()).toString(),
}

const CreateNote: React.FC = () => {
    const [note, setNote] = useState<NoteObject>(defaultObj);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({...note, [e.target.name]: e.target.value})
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