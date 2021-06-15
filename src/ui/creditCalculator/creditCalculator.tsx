import React from 'react';
import { makeStyles, Box, useTheme, useMediaQuery } from '@material-ui/core';

import AccountHealth from '../dashboard/components/accountHealth';
import ChartContainer from '../dashboard/components/chartContainer';
import CreditCardUsage from '../dashboard/components/creditCardUsage';
import Expenses from '../dashboard/components/expenses';
import Sidebar from '../feed-ui/components/sidebarComponent';
import Topbar from '../feed-ui/components/topBarComponent';
import CreditReportChanges from './components/creditReportChanges';
// import Calculator from './components/calculator';
import MobileCreditCalculator from './components/mobileCreditCalculator';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#EAF1FC  0% 0% no-repeat padding-box',
        paddingLeft: '80px',
        paddingBottom: '10rem',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '60px',
        },
    },

    sidebar: {
        width: '100px',
    },

    feedContainer: {
        marginLeft: '100px',
        width: '845px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
            marginLeft: '10px',
        },
    },

    accountHealthContainer: {
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    creditCardUsage: {
        height: '576px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    creditReports: {
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        margin: '1.8rem 0',
    },

    calculator: {
        marginTop: '48px',
        marginLeft: '5rem',
        height: '830px',
        width: '516px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    topbarContainer: {
        marginTop: '48px',
    },

    chartsContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '10px',
        },
    },
}));
const CreditCalculator = () => {
    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <>
            {isMobile ? (
                <MobileCreditCalculator />
            ) : (
                <div className={classes.mainContainer}>
                    <Box display="flex" flexDirection="row">
                        <div className={classes.sidebar}>
                            <Sidebar />
                        </div>
                        <Box
                            className={classes.feedContainer}
                            display="flex"
                            flexDirection="column"
                        >
                            <div className={classes.topbarContainer}>
                                <Topbar />
                            </div>
                            <div className={classes.chartsContainer}>
                                <ChartContainer />
                            </div>
                            <div className={classes.creditReports}>
                                <CreditReportChanges />
                            </div>
                            <Box className={classes.accountHealthContainer}>
                                <AccountHealth />
                            </Box>
                            <Box mt={10} className={classes.creditCardUsage}>
                                <CreditCardUsage />
                            </Box>
                            <Expenses />
                        </Box>
                        {/* <Box className={classes.calculator}>
                    <Calculator />
                </Box> */}
                    </Box>
                </div>
            )}
        </>
    );
};

export default CreditCalculator;
