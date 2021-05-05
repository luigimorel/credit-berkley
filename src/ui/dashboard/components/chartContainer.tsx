import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Accounts from './accounts';

const useStyles = makeStyles(() => ({
    mainContainer: {
        marginTop: '35px',
        height: '445px',
        width: '852px'
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
}));

const ChartContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Box className={classes.chartsContainer}>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignContent="center"
                >
                    <Box className={classes.chart}>Hello</Box>
                    <Box className={classes.chart}>Hello</Box>
                </Box>
            </Box>
            <Accounts />
        </div>
    );
};

export default ChartContainer;
