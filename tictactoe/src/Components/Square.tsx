interface ISquareProps {
    onClick: () => void;
    value: 'X' | 'O' | null;
    winner: string | null;
}

const Square: React.FC<ISquareProps> = ({ onClick, value, winner }) => {
    const isDisabled = Boolean(value) || Boolean(winner);

    return (
        <button
            className={`board-square ${value ? `square_${value}` : ''}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {value}
        </button>
    );
};

export default Square;
