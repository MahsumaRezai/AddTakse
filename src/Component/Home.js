import { Fragment } from 'react';
import Card from './Card';
import classes from './Card.module.css';

const Home = (props) => {

    return (
        <Fragment>
            <Card>
                <h2 className={classes.text}>{props.text}</h2>
                <button onClick={props.onClick} className={classes.btn}>Click</button>




            </Card>


        </Fragment>
    )
}
export default Home;