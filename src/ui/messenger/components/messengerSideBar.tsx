import React, { useState } from 'react';
import {
    makeStyles,
    Box,
    Typography,
    InputBase,
    Divider,
} from '@material-ui/core';

import placeholderImage from '../../../assets/person.jpg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '512px',
    },

    inputField: {
        height: '75px',
        alignItems: 'center',
        alignContent: 'center',
        width: '328px',
        borderRadius: '10px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    messages: {
        paddingBottom: '1.5rem',
        marginTop: '1.5rem',
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

    profileImage: {
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

    content: {
        fontWeight: 600,
        paddingBottom: '25px',
    },
    textContainer: {
        marginLeft: '3rem',
    },
}));
const MessengerSideBar = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');

    return (
        <div className={classes.mainContainer}>
            <Box display="flex" flexDirection="column">
                <InputBase
                    className={classes.inputField}
                    fullWidth
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Box>

            <Box
                display="flex"
                flexDirection="column "
                className={classes.messages}
            >
                {/* TO DO: Change this to a list item (I think this would be he most suitable) */}
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
                        <Typography component="p" className={classes.content}>
                            Why do you have to go to Indonesia ?
                        </Typography>
                        <Typography component="p">
                            by :{' '}
                            <span style={{ color: '#1D9F6E' }}>
                                Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Divider style={{ margin: '0 1rem' }} />{' '}
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
                        <Typography component="p" className={classes.content}>
                            Why do you have to go to Indonesia ?
                        </Typography>
                        <Typography component="p">
                            by :{' '}
                            <span style={{ color: '#1D9F6E' }}>
                                Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Divider style={{ margin: '0 1rem' }} />{' '}
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
                        <Typography component="p" className={classes.content}>
                            Why do you have to go to Indonesia ?
                        </Typography>
                        <Typography component="p">
                            by :{' '}
                            <span style={{ color: '#1D9F6E' }}>
                                Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Divider style={{ margin: '0 1rem' }} />
            </Box>
        </div>
    );
};

export default MessengerSideBar;
