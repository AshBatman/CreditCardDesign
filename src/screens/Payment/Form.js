import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    formItems: {
        marginTop: '5rem',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardNum: {
        width: '50rem',
    },
    buttonStyle: {
        width: '50rem',
        height: '3rem',
        margin: '1%',
        fontSize: '1.2rem'
    }
}));

export default function CardForm(props) {
    const classes = useStyles();
    const { cardNum, onCardNumChange, selectedDate, handleDateChange, selectedMonth, handleMonthChange, flipCard, setFlipCard, setCardName, handleCvvChange, cvvNum } = props
    return (
        <form className={classes.formItems} noValidate autoComplete="off">
            <Grid container xs={12} direction="column" justify="center" alignItems="center">
                <Grid item style={{ margin: '1%' }}>
                    <InputLabel shrink>
                        Card Number
                                </InputLabel>
                    <TextField
                        id="filled-error-helper-text"
                        helperText="Incorrect entry."
                        variant="outlined"
                        className={classes.cardNum}
                        value={cardNum}
                        onChange={onCardNumChange}
                    />
                </Grid>
                <Grid item style={{ margin: '1%' }}>
                    <InputLabel shrink>
                        Card Holder Name
                                </InputLabel>
                    <TextField
                        id="filled-error-helper-text"
                        defaultValue=""
                        helperText="Incorrect entry."
                        variant="outlined"
                        className={classes.cardNum}
                        onChange={setCardName}
                    />
                </Grid>
                <Grid xs={12} container direction="row" justify="center" alignItems="center" >

                    <Grid xs={3} item>
                        <InputLabel shrink>
                            Expiration Date
                                </InputLabel>
                        <DatePicker
                            views={["month"]}
                            variant="inline"
                            inputVariant="outlined"
                            format="MMM"
                            disableToolbar={true}
                            value={selectedMonth}
                            onChange={handleMonthChange}
                            shouldDisableDate={true}
                        />
                    </Grid>
                    <Grid xs={4} item style={{ marginTop: '1rem' }}>
                        <DatePicker
                            views={["year"]}
                            variant="inline"
                            inputVariant="outlined"
                            disableToolbar={true}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </Grid>
                    <Grid xs={3} item style={{ right: 'auto', left: '1rem', position: 'relative', marginTop: '1rem' }}>
                        <InputLabel shrink>
                            CVV
                                </InputLabel>
                        <TextField
                            id="filled-error-helper-text"
                            defaultValue=""
                            helperText="Incorrect entry."
                            variant="outlined"
                            onFocus={() => { setFlipCard(!flipCard) }}
                            onBlur={() => { setFlipCard(!flipCard) }}
                            onChange={handleCvvChange}
                            value={cvvNum}
                            type='number'
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" className={classes.buttonStyle}>
                    Submit
                            </Button>
            </Grid>
        </form>
    )
}