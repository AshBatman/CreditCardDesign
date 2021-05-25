import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../common/assets/images/16.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        display: 'grid',
        position: 'relative'
    },
    card: {
        width: 350,
        height: 200,
        elevation: 6,
        background: 'blue',
        marginTop: '50%',
        backgroundImage: `url(${Background})`,
        borderRadius: 6
    }
}));

function Payment() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.card}></div>
            </div>
        </>
    );
};

export default Payment;