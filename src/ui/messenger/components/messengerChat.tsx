import React from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';

import placeholderImage from '../../../assets/person.jpg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '700px',
    },
    header: {
        height: '110px',
    },
    messageContainer: {
        marginLeft: '3rem',
        marginBottom: '2rem',
        margin: '20px',
        marginTop: '1rem',
        '&::hover': {
            boxShadow:
                'ins    et 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        },
    },
    groupAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: 'auto',
        padding: '1rem',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },
    textContainer: {
        marginLeft: '3rem',
    },
    groupHeader: {
        fontWeight: 600,
        paddingBottom: '25px',
    },
}));
const MessengerChat = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.header}>
                <Box
                    display="flex"             
                    flexDirection="row"
                    className={classes.messageContainer}
                >
                    <Box>
                        <img
                            src={placeholderImage}
                            alt=""
                            className={classes.groupAvatar}
                        />
                    </Box>
                    <Box className={classes.textContainer}>
                        <Typography component="p" className={classes.groupHeader}>
                            Into The Cryptoverse{' '}
                        </Typography>
                        <Typography component="p">
                            27, 145 members, {' '}
                            <span style={{ color: '#1D9F6E' }}>
                                1649 online{' '}
                                </span>
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default MessengerChat;
