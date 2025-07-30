import { Grid } from 'semantic-ui-react';

const Board: React.FC = () => {
    return (
        <div className='board-wrapper'>
            <p>Hey X, It's your Turn.</p>
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, index) => (
                        <Grid.Column className='board-columns'>
                            Hello
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Board;
