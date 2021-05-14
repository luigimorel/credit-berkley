import { makeStyles, Box } from '@material-ui/core';

import Topbar from './components/topBarComponent';
import Sidebar from './components/sidebarComponent';
import FeedCategoriesBtns from './components/feedCategories';
import FeedsCard from './components/feedsCard';
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

    sidebar: {
        width: '315px',
    },

    feedContainer: {
        width: '845px',
        marginTop: '80px',
        marginLeft: '-100px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
    },

    topbarContainer: {
        marginTop: '48px',
    },

    descText: {
        fontSize: '18px',
        textAlign: 'left',
        color: '#1A2E35',
        marginBottom: '20px',
    },
    categoryContainer: {
        marginTop: '70px ',
    },
}));
const MainFeed = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.mainContainer}
            display="flex"
            flexDirection="row"
        >
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box display="flex" flexDirection="row">
                <div className={classes.topbarContainer}>
                    <Topbar />
                </div>

                <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.feedContainer}
                >
                    <div className={classes.categoryContainer}>
                        <FeedCategoriesBtns />
                    </div>

                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column">
                            <FeedsCard />
                            <FeedsCard />
                        </Box>
                        <Discussions />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainFeed;
