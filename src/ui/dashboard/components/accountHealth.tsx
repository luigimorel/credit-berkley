import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '40px',
        marginLeft: '40px',
        marginRight: '100px',
    },

    heading: {
        fontSize: '10px',
        color: '#1D9F6E',
    },
    mainHeading: {
        marginTop: '1rem',
        fontSize: '1rem',
        color: '#1A2E35',
    },
    balanceContainer: {},
    balances: {
        color: '#9E9E9E',
    },
    balanceAmount: {
        color: '#1A2E35',
    },
    accountBar: {
        height: '23px',
        borderRadius: '167px',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#0BBC79',
    },
    accountType: {},
    accountBalance: {
        fontSize: '14px',
    },
}));
const AccountHealth = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography component="p" className={classes.heading}>
                ACCOUNTS
            </Typography>

            <Typography component="p" className={classes.mainHeading}>
                How your accounts look today?
            </Typography>

            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography component="p" className={classes.balances}>
                    Total Open Balances
                </Typography>{' '}
                <Typography component="p" className={classes.balanceAmount}>
                    $145,000
                </Typography>
            </Box>
            <div className={classes.accountBar}></div>

            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography
                    component="p"
                    style={{ fontSize: '10px' }}
                    className={classes.accountType}
                >
                    Credit Cards{' '}
                </Typography>
                <Typography component="p" className={classes.accountBalance}>
                    $145,000
                </Typography>
            </Box>
        </div>
    );
};

export default AccountHealth;
