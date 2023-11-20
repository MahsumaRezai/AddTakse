import classes from './Card.module.css';
const Module = (props) => {
    return (
        <div className={classes.module}>
            <h2 className={classes.text}>Hello code </h2>
            <button onClick={props.onClose} className={classes.btn}>close</button>
        </div>
    )
}
export default Module;