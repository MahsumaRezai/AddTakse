import classes from "./Card.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.back} >
            {props.onClose}


        </div>
    )
}

export default Backdrop;