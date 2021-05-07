import React from 'react';
import { makeStyles, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: '200px',
        marginRight: "100px",
        width: "512px"
    },
}));
const MessengerSideBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Box display="flex" flexDirection="column">
                <Box>Hello from the side bar component</Box>
                <Box>This is the second div that you need to see</Box>
            </Box>
        </div>
    );
};

export default MessengerSideBar;
