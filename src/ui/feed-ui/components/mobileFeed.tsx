import { Box, Button, makeStyles } from '@material-ui/core';

import MobileMenu from './mobileMenu';
import InputComponent from './input.component';
import FeedCategories from './feedCategories';
import FeedsCard from './feedsCard';
import Discussions from './discussions';

const useStyles = makeStyles(() => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        padding: '25px ',
    },

    inputContainer: {
        marginTop: '41px',
    },

    seeMoreBtn: {
        color: '#1D9F6E',
        margin: '20px  auto  32px auto',
        fontWeight: 'bolder',
    },
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
            </Box>
            <Button className={classes.seeMoreBtn}>See More</Button>{' '}
            <Discussions />
        </Box>
    );
};

export default MobileFeed;
