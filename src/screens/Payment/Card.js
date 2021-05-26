import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../common/assets/images/16.jpeg';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '30rem',
        height: '20rem',
        elevation: 6,
        background: 'grey',
        backgroundImage: `url(${Background})`,
        borderRadius: 6,
        marginLeft: '15rem'
    },
}));

export default function Card() {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedValue(!selectedValue);
    }
    return (
        <ReactCardFlip isFlipped={selectedValue} flipDirection="horizontal">
            <div className={classes.card}>
                This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
            </div>
            <div className={classes.card}>          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
            </div>
        </ReactCardFlip>
    )
}