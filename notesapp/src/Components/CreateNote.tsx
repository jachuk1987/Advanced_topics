import styled from "@emotion/styled";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { title } from "process";
import { useState } from "react";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";

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
`;

const Error = styled(Typography)`
    background: red;
    color: #fff;
    padding: 10px;
    width: 50%;
`

const defaultObj = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: (new Date().toLocaleString()).toString(),
}

interface ICreateNoteProps {
    addNotes: (note: NoteObject) => void
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
    const [note, setNote] = useState<NoteObject>(defaultObj);
    const [error, setError] = useState<string>('');

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) {
            setError('');
        }
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const onCreateNote = () => {
        if (!note.title && !note.details) {
            setError('All fields are mandatory');
            return;
        }
        addNotes({ ...note, id: uuid() })
        setNote(defaultObj);
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
            <Button
                variant="outlined"
                onClick={() => onCreateNote()}
            >
                Create</Button>
            {error && <Error>{error}</Error>}
        </Container>
    )
}

export default CreateNote;