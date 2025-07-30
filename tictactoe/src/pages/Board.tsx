import { Grid } from 'semantic-ui-react';
import Square from '../Components/Square';

const Board: React.FC = () => {
    return (
        <div className='board-wrapper'>
            <p>Hey X, It's your Turn.</p>
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, index) => (
                        <Grid.Column className='board-columns'>
                            <Square />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Board;
