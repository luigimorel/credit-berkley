import React from 'react';
import { Button, makeStyles, Box, Typography } from '@material-ui/core';

import incomeIneqaulity from '../../../assets/expenses/income_ineq.jpg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '48px',
        marginLeft: '40px',
        marginRight: '100px',
    },

    mainHeading: {
        fontSize: '10px',
        color: '#1D9F6E',
    },

    minorHeading: {
        marginTop: '1rem',
        marginBottom: '1.2rem',
        fontWeight: 'bolder',
        fontSize: '16px',
        color: '#1A2E35',
    },

    headerPara: {
        color: '#9E9E9E',
        fontSize: '10px',
    },

    textPara: {
        color: '#1A2E35',
        fontSize: '14px',
    },

    reportsBtn: {
        height: '3rem',
        marginTop: '10px',
        color: '#1D9F6E',
        border: '1px solid #1D9F6E',
        width: '180px',
        fontSize: '10px',
        fontWeight: 'bold',
    },

    img: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
    },
}));

const CreditReportChanges = () => {
    const classes = useStyles();

    return (
        <>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                className={classes.mainContainer}
            >
                <Box>
                    {' '}
                    <Typography component="p" className={classes.mainHeading}>
                        ACCOUNTS
                    </Typography>
                    <Typography component="p" className={classes.minorHeading}>
                        How your accounts look today?
                    </Typography>
                    <Box my={2}>
                        <Typography
                            component="p"
                            className={classes.headerPara}
                        >
                            Closed accounts
                        </Typography>
                        <Typography component="p" className={classes.textPara}>
                            USE CU
                        </Typography>
                    </Box>
                    <Box my={2}>
                        <Typography
                            component="p"
                            className={classes.headerPara}
                        >
                            On-time payments
                        </Typography>
                        <Typography component="p" className={classes.textPara}>
                            JPMCB CARD
                        </Typography>
                    </Box>
                    <Box my={1}>
                        <Typography
                            component="p"
                            className={classes.headerPara}
                        >
                            Credit inquiries removed
                        </Typography>
                        <Typography component="p" className={classes.textPara}>
                            CAP ONE
                        </Typography>
                    </Box>
                    <Box my={2}>
                        <Typography
                            component="p"
                            className={classes.headerPara}
                        >
                            Updated account information
                        </Typography>
                        <Typography component="p" className={classes.textPara}>
                            USE CU
                        </Typography>
                    </Box>
                    <Box my={2}>
                        <Typography
                            component="p"
                            className={classes.headerPara}
                        >
                            Based on your TransUnion report{' '}
                        </Typography>
                    </Box>
                </Box>
                <Box alignItems="center" justifyContent="center">
                    <img src={incomeIneqaulity} alt="income inequality" />
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button className={classes.reportsBtn}>
                    VIEW REPORT CHANGES
                </Button>
            </Box>{' '}
        </>
    );
};

export default CreditReportChanges;
