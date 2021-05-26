import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../common/assets/images/16.jpeg';
import Card from './Card'
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        display: 'grid',
        position: 'relative'
    },
    cardPos: {
        marginTop: '-55rem',
    },
    form: {
        width: '60rem',
        height: '40rem',
        elevation: 6,
        background: 'grey',
        marginTop: '30%',
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: "1px 1px 3px 1px #d8d8d8"

    }
}));

function Payment() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>

                <div className={classes.form}></div>
                <div className={classes.cardPos}>
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Payment;