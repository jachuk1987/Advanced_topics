import { NoteObject } from "../models/note";


interface INotesProps {
    note: NoteObject
}

const Note: React.FC<INotesProps> = ( note ) => {

    return (
        <div>Hello</div>
    )
}

export default Note;