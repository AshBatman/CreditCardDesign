import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import CardForm from './Form';
import Grid from '@material-ui/core/Grid';
import { getCardType } from '../../utils/cardTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        display: 'grid',
        position: 'relative'
    },
    cardPos: {
        marginTop: '-48rem',
    },
    form: {
        width: '60rem',
        height: '35rem',
        elevation: 6,
        background: 'grey',
        marginTop: '30%',
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: "1px 1px 3px 1px #d8d8d8",
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
}));

function Payment() {
    const classes = useStyles();
    const [flipCard, setFlipCard] = useState(false);
    const [cardNum, setValue] = useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedMonth, handleMonthChange] = useState(new Date());
    const [cardType, setCardType] = useState('Visa');
    const [cardName, setCardName] = useState('');
    const [cvvNum, setCvvNumber] = useState('');

    const onCardNumChange = (event) => {
        var val = event.target.value;
        const valArray = val.split(' ').join('').split('');
        var valSpace = val.split("")

        if (valSpace[valSpace.length - 1] === ' ') {
            var valSpaceN = valSpace.slice(0, -2)
            val = valSpaceN.join("")
            setValue(val)
            return;
        }

        if (isNaN(valArray.join('')))
            return;
        if (valArray.length === 17)
            return
        if (valArray.length % 4 === 0 && valArray.length <= 15) {
            setValue(val + " ")
        } else {
            setValue(val)
        }


    }

    useEffect(() => {
        const cardValue = cardNum.replaceAll(/\s/g, '')
        console.log(getCardType(cardValue))
        setCardType(getCardType(cardValue))
    }, [cardNum])

    return (
        <>
            <div className={classes.root}>

                <Grid className={classes.form} justify='center'>
                    <CardForm onCardNumChange={onCardNumChange} cardNum={cardNum} setValue={setValue} selectedDate={selectedDate} handleDateChange={handleDateChange} handleMonthChange={handleMonthChange} selectedMonth={selectedMonth} flipCard={flipCard} setFlipCard={setFlipCard} setCardName={(event) => { setCardName(event.target.value) }} handleCvvChange={(event) => { setCvvNumber((event.target.value).substring(0, 4)) }} cvvNum={cvvNum} />
                </Grid>
                <div className={classes.cardPos}>
                    <Card flipCard={flipCard} cardType={cardType} selectedDate={selectedDate} selectedMonth={selectedMonth} cardNum={cardNum} cardName={cardName} cvvNum={cvvNum} />
                </div>
            </div>
        </>
    );
};

export default Payment;