import { makeStyles, Box } from '@material-ui/core';
import React from 'react';

import Topbar from './components/topBarComponent';
import Sidebar from './components/sidebarComponent';
import FeedCategoriesBtns from './components/feedCategories';
import FeedsCard from './feedsCard';
import Discussions from './components/discussions';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
        paddingLeft: '80px',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '60px',
        },
    },
    toolbarContainer: {},
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
}));
const MainFeed = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.toolbarContainer}>
                <Topbar />
            </div>

            <Box display="flex" flexDirection="row">
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
                <Box className={classes.feedContainer}>
                    <FeedCategoriesBtns />
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column">
                            <FeedsCard />
                            <FeedsCard />
                        </Box>
                        <Discussions />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default MainFeed;
