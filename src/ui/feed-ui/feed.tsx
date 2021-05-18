import { makeStyles, Box } from '@material-ui/core';
import React from 'react';

import Topbar from './components/topBarComponent';
import Sidebar from './components/sidebarComponent';
import FeedCategoriesBtns from './components/feedCategories';
import FeedsCard from './components/feedsCard';
import Discussions from './components/discussions';
<<<<<<< Updated upstream
=======
import MobileFeed from './components/mobileFeed';
>>>>>>> Stashed changes

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

    feedContainer: {
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
<<<<<<< Updated upstream
        <div className={classes.mainContainer}>
            <Topbar />
=======
        <>
            {isMobile ? (
                <MobileFeed />
            ) : (
                <Box className={classes.mainContainer}>
                    <Box display="flex" flexDirection="row">
                        <Box className={classes.sidebar}>
                            <Sidebar />
                        </Box>

                        <Box display="flex" flexDirection="row">
                            <div className={classes.topbarContainer}>
                                <Topbar />
                            </div>
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
                        <Discussions />
=======
>>>>>>> Stashed changes
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default MainFeed;
