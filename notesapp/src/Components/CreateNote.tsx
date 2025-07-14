import { InputBase } from "@mui/material";



const CreateNote: React.FC = () => {
    return (
        <div>
            <InputBase
                placeholder="Title"
            />

            <InputBase
                placeholder="Details"
            />            
        </div>
    )
}

export default CreateNote;