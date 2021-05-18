import React from 'react';
import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';
import InputComponent from './input.component';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '25px',
    },

    hamburgerContainer: {
        height: '57px',
        width: '57px',
        marginLeft: '25px',
    },

    hamburger: {
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '50%',
        right: 0,
    },

    joinBtn: {
        width: '67px',
        height: '57px',
        borderRadius: '10px',
        marginRight: '25px',
        fontWeight: 'bolder',
        color: '#1D9F6EA2',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));

const MobileMenu = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.mainContainer}>
                <Box className={classes.hamburgerContainer}>
                    <IconButton className={classes.hamburger}>
                        <Hamburger />
                    </IconButton>
                </Box>
                <Button className={classes.joinBtn}>Join</Button>
            </Box>
            <Box display="flex" flexDirection="row">
                <InputComponent />
            </Box>{' '}
        </>
    );
};

export default MobileMenu;
