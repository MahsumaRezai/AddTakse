import { Fragment } from 'react';
import Card from './Card';

const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <h2>{props.text}</h2>
                <button>Click</button>
                
            


            </Card>


        </Fragment>
    )
}
export default Home;