

interface ISquareProps {
    onClick: () => void;
}

const Square: React.FC<ISquareProps> = ({ onClick }) => {
    return (
        <button
            className="board-square"
            onClick={onClick}
        >
            X
        </button>
    )
}

export default Square;
