import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import Sidebar from '../feed-ui/components/sidebarComponent';
import MessengerTopBar from './components/messengerTopBar';
import MessengerSideBar from './components/messengerSideBar';
import MessengerChat from './components/messengerChat';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '100%',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
    },
    sidebar: {
        width: '215px',
        alignItems: 'center',
        marginTop: '50px',
        alignContent: 'center',
    },
    messengerSideBarContainer: {
        width: "512px",
        
}
}));

const Messenger = () => {
    const classes = useStyles();

    return (
        <Box
            className={classes.mainContainer}
            display="flex"
            flexDirection="row"
        >
            <div className={classes.sidebar}>
                <Sidebar />
            </div>
            <MessengerTopBar />
            <Box display="flex" justifyContent="column">
                <MessengerSideBar />
                <MessengerChat />
            </Box>
        </Box>
    );
};

export default Messenger;
