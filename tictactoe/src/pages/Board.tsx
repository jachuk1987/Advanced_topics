import { Grid } from 'semantic-ui-react';
import Square from '../Components/Square';
import { useState } from 'react';

const Board: React.FC = () => {

    const activePlayer = (Math.random() + 1) === 1 ? 'X' : 'O';

    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(activePlayer);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const setSquareValue = (index: number) => {
        const data = squares.map((value, i) => {
            if (index === i) {
                return currentPlayer;
            }
            return value;
        })
        setSquares(data);
    }

    return (
        <div className='board-wrapper'>
            <p>Hey {currentPlayer}, It's your Turn.</p>
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, index) => (
                        <Grid.Column className='board-columns'>
                            <Square
                                onClick={() => setSquareValue(index)}
                                value={squares[index]}
                            />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Board;
