import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../common/assets/images/16.jpeg';
import Chip from '../../common/assets/images/chip.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '50%',
        height: '18rem',
        elevation: 6,
        background: 'grey',
        backgroundImage: `url(${Background})`,
        borderRadius: 6,
        marginLeft: '15rem'
    }
}));

export default function Card({ flipCard = false, cardType = 'Visa', cardNum = '#### #### #### ####', selectedMonth = '--', cardName, selectedDate, cvvNum = '****' }) {
    const classes = useStyles();
    const deafaultCardVal = '#### #### #### ####';
    const cardNumber = cardNum + deafaultCardVal.slice(cardNum.length);
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const cvvNo = "*".repeat(cvvNum.length);

    return (
        <ReactCardFlip isFlipped={flipCard} flipDirection="horizontal">
            <div className={classes.card}>
                <Grid container xs={12} direction="column" justify="center" alignItems="center">
                    <Grid container xs={12} direction="row" style={{ alignItems: 'center', marginBottom: '-3%' }}  >
                        <Grid item xs={6}>
                            <img src={Chip} alt='chip' style={{ width: 80, height: 57, marginLeft: '5%' }}></img>
                        </Grid>
                        <Grid item xs={6} style={{ right: 0, left: 'auto', textAlign: 'end', paddingRight: '5%', color: 'white', fontSize: '2rem', textAlignVertical: 'center' }}>
                            <p>{cardType ? cardType : 'Visa'}</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{ textAlign: 'center', fontSize: '2rem', color: 'white' }}>{cardNumber}</p>
                    </Grid>
                    <Grid container xs={12} direction="row" style={{ position: 'fixed', bottom: 10, right: 0 }}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3} style={{ paddingLeft: '2%' }}>
                            <p style={{ margin: 0, textAlign: 'start', color: 'white', fontSize: '.8rem' }}>Card Holder</p>
                            <p style={{ textAlign: 'start', margin: 0, color: 'white' }}>{cardName ? cardName : 'Your Name'}</p>
                        </Grid>
                        <Grid item xs={3} style={{ paddingRight: '2%', right: 0, left: 'auto', textAlign: 'end', }}>
                            <p style={{ margin: 0, color: 'white', fontSize: '.8rem' }}>Expires</p>
                            <p style={{ margin: 0, color: 'white' }}>{Months.indexOf(selectedMonth.toString().slice(4, 7)) + '/' + selectedDate.toString().slice(13, 15)}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.card}>
                <div style={{ height: '3rem', width: '50%', backgroundColor: 'black', borderColor: 'grey', position: 'absolute', marginTop: '2%' }}>
                </div>
                <div style={{ marginLeft: '2.5%', position: 'absolute', marginTop: '12%' }}>
                    <p style={{ textAlign: 'end', marginTop: 0, marginBottom: 0, color: 'white', paddingRight: 5 }}>cvv</p>
                    <div style={{ height: '2rem', width: '27rem', backgroundColor: 'white', borderColor: 'grey', marginTop: 0, borderRadius: 6 }}>
                        <p style={{ textAlign: 'end', fontSize: '1.2rem', marginTop: 0, paddingRight: 5 }}>{cvvNo ? cvvNo : '.'}</p>
                    </div>
                </div>
                <div style={{ height: '2rem', position: 'absolute', marginTop: '15%', color: 'white', fontSize: '2rem', right: '27.5%' }}>
                    <p style={{ textAlign: 'end' }}>{cardType ? cardType : 'Visa'}</p>
                </div>
            </div>
        </ReactCardFlip>
    )
}