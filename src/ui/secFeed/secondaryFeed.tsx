import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import SidebarSecondary from './components/sidebarSecondary';
import Topbar from '../feed-ui/components/topBarComponent';
import FeedCategories from '../feed-ui/components/feedCategories';
import FeedsCard from '../feed-ui/components/feedsCard';
import Discussions from '../feed-ui/components/discussions';
import SecondaryTopbar from './components/secondaryTopbar';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
    },
    sidebar: {
        width: '315px',
    },
    feedContainer: {},
}));

const SecondaryFeed = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <SecondaryTopbar />
            <Box display="flex" flexDirection="row">
                <div className={classes.sidebar}>
                    <SidebarSecondary />
                </div>
                <Box className={classes.feedContainer}>
                    <FeedCategories />
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

export default SecondaryFeed;
