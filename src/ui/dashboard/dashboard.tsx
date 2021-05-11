import React from 'react';
import { makeStyles, Box } from '@material-ui/core';


import Topbar from '../feed-ui/components/topBarComponent';
import Sidebar from '../feed-ui/components/sidebarComponent';
import ChartContainer from './components/chartContainer';
import AccountHealth from './components/accountHealth';
import Expenses from './components/expenses';
import CreditCardUsage from './components/creditCardUsage';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        paddingLeft: '80px',
        paddingBottom: '10rem',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '60px',
        },
    },

    sidebar: {
        width: '60px',
    },

    feedContainer: {
        marginLeft: '100px',
        width: '845px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
            marginLeft: '10px',
        },
    },

    descText: {
        fontSize: '18px',
        textAlign: 'left',
        color: '#1A2E35',
        marginBottom: '20px',
    },
    accountHealthContainer: {
        height: '445px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    creditCardUsage: {
        height: '576px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));
const MainFeed = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Topbar />

            <Box display="flex" flexDirection="row">
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>

                <Box
                    className={classes.feedContainer}
                    display="flex"
                    flexDirection="column"
                >
                    <Box>
                        <ChartContainer />
                    </Box>

                    <Box >
                        <Expenses />
                    </Box>

                    <Box className={classes.accountHealthContainer}>
                        <AccountHealth />
                    </Box>

                    <Box mt={10} className={classes.creditCardUsage}>
                        <CreditCardUsage />
                    </Box>

                </Box>
            </Box>
        </div>
    );
};

export default MainFeed;
