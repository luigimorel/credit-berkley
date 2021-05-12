import React from 'react';
import {
    Box,
    Button,
    IconButton,
    Typography,
    makeStyles,
    ListItem,
} from '@material-ui/core';

import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';
import logo from '../../../assets/logo-small.jpg';

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        alignItems: 'center',
        marginTop: '57px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
    },

    iconButton: {
        width: '42px',
        height: '42px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    btnContainer: {
        marginTop: '33px',
        alignContent: 'center',
        width: '315px',
        height: '66px',
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
            color: '#1D9F6E',
            cursor: 'pointer',
            boxShadow:
                '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            borderRight: '8px solid #1D9F6E',
        },
    },
    hamburgerContainer: {
        height: '57px',
        width: '57px',
    },
    hamburger: {
        borderRadius: '50%',
        margin: 0,
    },
    iconButtonText: {
        marginLeft: '2rem',
        color: '#6D7D8F',
        '&:hover': {
            color: '#1D9F6E',
        },
    },
    logo: {
        marginLeft: '59.13px',
    },
    postBtn: {
        marginTop: '100px',
        borderRadius: '10px',
        marginBottom: '300px',
        backgroundColor: '#1D9F6E',
        color: '#ffffff',
        height: '68px',
        width: '256px',
    },
}));
const SidebarSecondary = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.sidebarContainer}
        >
            {/* TO DO : Remove the duplicates by looping through this */}
            <Box
                className={classes.hamburgerContainer}
                display="flex"
                flexDirection="row"
                justifyContent="flex-start "
            >
                <IconButton className={classes.hamburger}>
                    <Hamburger />
                </IconButton>
                <img
                    src={logo}
                    className={classes.logo}
                    height="49.3px"
                    width="39.73px"
                    alt=""
                />
            </Box>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>{' '}
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>{' '}
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>{' '}
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>{' '}
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>
            <Button className={classes.postBtn}>Join</Button>
        </Box>
    );
};

export default SidebarSecondary;
