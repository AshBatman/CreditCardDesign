import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../common/assets/images/16.jpeg';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '50%',
        height: '18rem',
        elevation: 6,
        background: 'grey',
        backgroundImage: `url(${Background})`,
        borderRadius: 6,
        marginLeft: '15rem'
    },
}));

export default function Card({ flipCard = false }) {
    const classes = useStyles();
    return (
        <ReactCardFlip isFlipped={flipCard} flipDirection="horizontal">
            <div className={classes.card}>
                This is the front of the card.
            </div>
            <div className={classes.card}>
                This is the back of the card.
            </div>
        </ReactCardFlip>
    )
}