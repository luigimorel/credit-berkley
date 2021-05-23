import { makeStyles, Box, Button, Typography } from '@material-ui/core';
import { format } from 'date-fns';

import Donut from './charts/donutChart';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: {
        marginTop: '35px',
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        [breakpoints.down('sm')]: {
            height: 'auto',
            width: '100%',
            marginTop: '1rem',
        },
    },

    chartsContainer: { marginBottom: '40px' },

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

    chartArea: {
        marginTop: '2rem',
        marginLeft: '145px',
        marginRight: '145px',
        justifyContent: 'space-between',
        [breakpoints.down('sm')]: { justifyContent: 'center' },
    },

    descText: {
        textAlign: 'center',
        marginTop: '45px',
        [breakpoints.down('sm')]: { marginBottom: '1.5rem' },
    },

    reportsBtn: {
        position: 'absolute',
        height: '3rem',
        color: '#1D9F6E',
        border: '1px solid #1D9F6E',
        width: '180px',
        marginTop: '200px',
        fontWeight: 'bold',
        fontSize: '10px',
        [breakpoints.down('sm')]: { marginTop: '1rem' },
    },
}));

const ChartContainer = () => {
    const classes = useStyles();

    const date = new Date();

    return (
        <div className={classes.mainContainer}>
            <Box className={classes.chartsContainer}>
                <Box
                    display="flex"
                    flexDirection="row"
                    className={classes.chartArea}
                >
                    <Box className={classes.chart}>
                        <Donut size={65} value={75}></Donut>
                    </Box>
                    <Box className={classes.chart}>
                        <Donut size={65} value={75} />
                    </Box>{' '}
                </Box>
                <Typography component="p" className={classes.descText}>
                    Updated {format(date, ' MMMM dd, yyyy')} - Calculated using{' '}
                    VantageScore 3.0
                </Typography>{' '}
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button className={classes.reportsBtn}>
                        VIEW REPORT CHANGES
                    </Button>
                </Box>
            </Box>{' '}
        </div>
    );
};

export default ChartContainer;
