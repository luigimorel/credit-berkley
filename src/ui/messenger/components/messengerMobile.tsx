import React from 'react';
import {
    Box,
    Button,
    Typography,
    InputBase,
    makeStyles,
    Divider,
} from '@material-ui/core';

import MobileMenu from '../../feed-ui/components/mobileMenu';
import placeholderImage from '../../../assets/person.jpg';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        padding: '25px ',
    },
    textField: {
        marginTop: '50px',
        marginBottom: '32px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '10px',
        height: '60px',

        '&::-webkit-input-placeholder': {
            textAlign: 'center',
        },
    },
    messageContainer: {
        marginBottom: '2rem',
        marginTop: '1rem',
        '&::hover': {
            boxShadow:
                'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        },
    },

    profileImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: 'auto',
        padding: '1rem',
        background:
            'transparent radial-gradient(closest-side at 0% 0%, #FFFFFF9D 0%, #92929214 100%) 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
        [breakpoints.down('sm')]: {
            width: '37px',
            height: 'auto',
        },
    },

    textContainer: { marginLeft: '25px' },

    message: {
        fontWeight: 600,
        fontSize: '14px',
    },
}));

const MessengerMobile = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            <MobileMenu />
            <InputBase
                fullWidth
                className={classes.textField}
                placeholder="Search"
            />
            <Box
                display="flex"
                flexDirection="row"
                className={classes.messageContainer}
            >
                <Box>
                    <img
                        src={placeholderImage}
                        alt=""
                        className={classes.profileImage}
                    />
                </Box>
                <Box className={classes.textContainer}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                    ></Box>
                    <Typography component="p" className={classes.message}>
                        Why do you have to go to Indonesia ?
                    </Typography>
                    <Typography component="p" style={{ marginTop: '10px' }}>
                        <span style={{ color: '#1D9F6E', fontSize: '10px' }}>
                            By Wildan Wari
                        </span>
                    </Typography>
                </Box>
            </Box>
            <Divider />
            {/* A duplicate of a single message section */}

            <Box
                display="flex"
                flexDirection="row"
                className={classes.messageContainer}
            >
                <Box>
                    <img
                        src={placeholderImage}
                        alt=""
                        className={classes.profileImage}
                    />
                </Box>
                <Box className={classes.textContainer}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-around"
                    ></Box>
                    <Typography component="p" className={classes.message}>
                        Why do you have to go to Indonesia ?
                    </Typography>
                    <Typography component="p" style={{ marginTop: '10px' }}>
                        <span style={{ color: '#1D9F6E', fontSize: '10px' }}>
                            By Wildan Wari
                        </span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MessengerMobile;
