import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

import Credit from '../../../assets/expenses/credit.jpg';
import Accounts from '../../../assets/expenses/accounts.jpg';
import Tax from '../../../assets/expenses/tax.jpg';
import Auto from '../../../assets/expenses/auto.jpg';
import Housing from '../../../assets/expenses/housing.jpg';
import Savings from '../../../assets/expenses/savings.jpg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '2rem',
        marginBottom: '5rem',
        height: '445px',
        width: '852px',
        alignItems: 'center',
        alignContent: 'center',
    },

    chartsContainer: {
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    chart: {
        height: '200px',
        color: '#000',
        borderRadius: '50%',
        width: '200px',
    },

    accountsContainer: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    account: {
        height: '190px',
        marginRight: '1.8rem',
        width: '264px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        [theme.breakpoints.down('sm')]: {
            marginTop: '',
        },
    },

    textContainer: {
        marginLeft: '1.5rem',
    },

    accountsHeader: {
        margin: '1.5rem  0 0 0 ',
        color: '#1D9F6E',
        fontSize: '1rem',
        fontWeight: 'bolder',
    },

    accountsSpan: {
        margin: '.8rem 0 0 0',
        color: '#9E9E9E',
    },

    illustration: {
        height: '87px',
        width: '115px',
        marginTop: '1.6rem',
    },

    mainAccountsContainer: { marginTop: '3rem' },
}));

const accounts: Array<any> = [
    {
        id: 1,
        name: 'Credit',
        image: Credit,
        descText: 'Last checked: Feb 29, 2020',
    },
    {
        id: 2,
        name: 'Accounts',
        image: Accounts,
        descText: '4 active accounts',
    },
    {
        id: 3,
        name: 'Tax',
        image: Tax,
        descText: 'Start my taxes now',
    },
    {
        id: 4,
        name: 'Auto',
        image: Auto,
        descText: 'Link you cars and drivers',
    },
    {
        id: 5,
        name: 'Housing ',
        image: Housing,
        descText: 'Discover your buying power',
    },
    {
        id: 6,
        name: 'Savings',
        image: Savings,
        descText: 'Savings',
    },
];

const Expenses = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                className={classes.mainContainer}
            >
                <div className={classes.mainAccountsContainer}>
                    <Box className={classes.accountsContainer}>
                        {/* TO DO: Remove the replicates and put look through the accounts arrays. */}

                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Credit
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    Last checked: Feb 29, 2020
                                </Typography>
                            </div>

                            <img
                                src={Credit}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Accounts
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    4 active account
                                </Typography>
                            </div>

                            <img
                                src={Accounts}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Tax
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    Star my taxes now
                                </Typography>
                            </div>

                            <img
                                src={Tax}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        className={classes.accountsContainer}
                    >
                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Auto
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    Link your cars and drivers
                                </Typography>
                            </div>
                            <img
                                src={Auto}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Housing
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    Discover your buying power
                                </Typography>
                            </div>
                            <img
                                src={Housing}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                        <Box className={classes.account}>
                            <div className={classes.textContainer}>
                                <Typography
                                    component="p"
                                    className={classes.accountsHeader}
                                >
                                    Savings
                                </Typography>
                                <Typography
                                    component="span"
                                    className={classes.accountsSpan}
                                >
                                    Savings
                                </Typography>
                            </div>
                            <img
                                src={Savings}
                                className={classes.illustration}
                                alt=""
                            />
                        </Box>
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default Expenses;
