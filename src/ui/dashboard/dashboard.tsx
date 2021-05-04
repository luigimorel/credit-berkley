import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Sidebar from '../feed-ui/components/sidebarComponent';
import TopBar from '../feed-ui/components/topBarComponent';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
        paddingLeft: '80px',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '60px',
        },
    },
    sidebar: {
        width: '60px',
    },
}));
const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div>
                <TopBar />
            </div>
            <Box display="flex" flexDirection="row">
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </Box>
            <Sidebar />
        </div>
    );
};

export default Dashboard;
