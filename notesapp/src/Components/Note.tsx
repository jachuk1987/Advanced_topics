import { Card, CardContent } from "@mui/material";
import { NoteObject } from "../models/note";


interface INotesProps {
    note: NoteObject
}

const Note: React.FC<INotesProps> = ( note ) => {

    return (
        <Card>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default Note;