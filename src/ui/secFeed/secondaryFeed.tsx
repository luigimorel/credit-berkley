import { makeStyles, Box } from '@material-ui/core';

import SidebarSecondary from './components/sidebarSecondary';
import FeedCategories from '../feed-ui/components/feedCategories';
import Discussions from '../feed-ui/components/discussions';
import SecondaryTopbar from './components/secondaryTopbar';
import SecondaryFeedCard from './components/secondaryFeedCard';
import LatestDiscussions from './components/latestDiscussions';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
    },

    sidebar: {
        width: '315px',
    },

    feedContainer: {
        width: '845px',
        marginTop: '80px',
        marginLeft: '-120px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
    },

    topbarContainer: {
        margin: '40px 0',
    },

    categoryContainer: {
        marginTop: '70px ',
    },
}));

const SecondaryFeed = () => {
    const classes = useStyles();

    return (
        <Box
            className={classes.mainContainer}
            display="flex"
            flexDirection="row"
        >
            <Box className={classes.sidebar}>
                <SidebarSecondary />
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                style={{ marginLeft: '30px' }}
            >
                <div className={classes.topbarContainer}>
                    <SecondaryTopbar />
                </div>

                <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.feedContainer}
                >
                    <div className={classes.categoryContainer}>
                        <FeedCategories />
                    </div>
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column">
                            <SecondaryFeedCard />
                            <SecondaryFeedCard />
                        </Box>
                    </Box>
                </Box>
                <LatestDiscussions />
            </Box>
        </Box>
    );
};

export default SecondaryFeed;
