import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
// import Accounts from './accounts';
import Illustration from '../../../assets/imgIllustration.jpg';

const useStyles = makeStyles(() => ({
    mainContainer: {
        marginTop: '35px',
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    chartsContainer: {},
    chart: {
        height: '200px',
        color: '#000',
        borderRadius: '50%',
        width: '200px',
    },
    accountsContainer: { marginTop: '3rem' },
    account: {
        height: '190px',
        marginRight: '1.8rem',
        width: '264px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
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
        float: 'right',
        marginTop: '1.6rem',
    },
    mainAccountsContainer: {
        height: '445px',
    },
}));

const ChartContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Box className={classes.chartsContainer}>
                <Box display="flex" flexDirection="row" alignContent="center">
                    <Box className={classes.chart}>Hello</Box>
                    <Box className={classes.chart}>Hello</Box>
                </Box>
            </Box>
        
        </div>
    );
};

export default ChartContainer;
