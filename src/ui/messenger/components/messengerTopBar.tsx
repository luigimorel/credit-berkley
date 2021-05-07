import React from 'react';
import { Grid, Button, makeStyles, Box, IconButton } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '110px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
    },

    hamburgerContainer: {
        height: '57px',
        width: '57px',
    },
    hamburger: {
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '50%',
    },

 
    dropDownContainer: {
        marginLeft: '125px',
        display: 'flex',
        flexDirection: 'row',
    },

    dropdownButtons: {
        marginLeft: '61px',
        width: '57px',
        marginTop: '30px',
        height: '57px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    btnContainer: {},

    btn: {
        height: '45px',
        marginRight: '62px',
        width: '197px',
        borderRadius: '10px',
        marginTop: '30px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));

const MessengerTopBar = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="row"
            p={1}
            className={classes.mainContainer}
        >
            <Box
                className={classes.btnContainer}
                display="flex"
                flexDirection="row"
            >
                <Button className={classes.btn} startIcon={<LightningIcon />}>
                    Credit Cards
                </Button>
                <Button className={classes.btn} startIcon={<LightningIcon />}>
                    Credit Cards
                </Button>
                <Button className={classes.btn} startIcon={<LightningIcon />}>
                    Credit Cards
                </Button>
                <Button className={classes.btn} startIcon={<LightningIcon />}>
                    Credit Cards
                </Button>
            </Box>
            <Box className={classes.dropDownContainer}>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default MessengerTopBar;
