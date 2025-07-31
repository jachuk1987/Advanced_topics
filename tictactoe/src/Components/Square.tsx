

interface ISquareProps {
    onClick: () => void;
}

const Square: React.FC<ISquareProps> = ({ onClick }) => {
    return (
        <button
            className="board-square"
            onClick={onClick}
        >
            
        </button>
    )
}

export default Square;
