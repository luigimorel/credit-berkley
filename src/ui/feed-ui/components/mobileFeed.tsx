import { Box, makeStyles } from '@material-ui/core';

import MobileMenu from './mobileMenu';
import InputComponent from './input.component';
import FeedCategories from './feedCategories';
import FeedsCard from './feedsCard';

const useStyles = makeStyles(() => ({
    mainContainer: { background: '#ECF3FD 0% 0% no-repeat padding-box' },
    inputContainer: { marginTop: '41px', marginBottom: '38px' },
}));

const MobileFeed = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.mainContainer}
        >
            <MobileMenu />
            <Box className={classes.inputContainer}>
                <InputComponent />
                <FeedCategories />
                <FeedsCard />
                <FeedsCard />
            </Box>{' '}
        </Box>
    );
};

export default MobileFeed;
