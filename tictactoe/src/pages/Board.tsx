import { Grid } from 'semantic-ui-react';
import Square from '../Components/Square';
import { useEffect, useState } from 'react';

type Player = 'X' | 'O' | null;

const Board: React.FC = () => {
    const activePlayer = Math.round(Math.random()) === 1 ? 'X' : 'O';

    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(activePlayer);
    const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
    const [winner, setWinner] = useState<string | null>(null);

    useEffect(() => {
        const winnerPlayer = calculateWinner(squares);
        if (winnerPlayer) {
            setWinner(`${winnerPlayer} is the Winner`);
        } else if (!squares.includes(null)) {
            setWinner('Both players won, Reload for New Game');
        }
    }, [squares]);

    const calculateWinner = (squares: Player[]): Player | null => {
        const possibleWinningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of possibleWinningCombinations) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const setSquareValue = (index: number) => {
        if (squares[index] || winner) return;

        const data = squares.map((value, i) => {
            if (index === i) {
                return currentPlayer;
            }
            return value;
        });

        setSquares(data);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return (
        <div className='board-wrapper'>
            <p>{winner ? winner : `Hey ${currentPlayer}, It's your Turn.`}</p>
            <Grid columns={3} centered>
                {Array(9).fill(null).map((_, index) => (
                    <Grid.Column className='board-column' key={index}>
                        <Square
                            onClick={() => setSquareValue(index)}
                            value={squares[index]}
                            winner={winner}
                        />
                    </Grid.Column>
                ))}
            </Grid>
        </div>
    );
};

export default Board;
