import { useState } from 'react';
import {
    makeStyles,
    Box,
    Typography,
    TextField,
    Divider,
} from '@material-ui/core';

import { ReactComponent as Ellipsis } from '../../../assets/feedIcons/Ellipsis.svg';
import placeholderImage from '../../../assets/person.jpg';
import { FaThumbtack } from 'react-icons/fa';
import { SearchRounded } from '@material-ui/icons';
import Messages from './messages';

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '750px',
    },

    header: {
        height: 'auto   ',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    groupHeaderText: {
        marginLeft: '3rem',
        marginBottom: '2rem',
        marginTop: '1rem',
        '&::hover': {
            boxShadow:
                'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        },
    },

    groupAvatar: {
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
    },

    textContainer: {
        marginLeft: '3rem',
    },

    groupHeader: {
        fontWeight: 600,
        paddingBottom: '25px',
    },

    iconsContainer: {
        margin: '2rem',
    },

    pinnedMessage: {
        height: '75px',
        alignItems: 'center',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    searchIcon: {
        color: '#69BDA2',
        marginRight: '1rem',
    },

    messageContainer: {
        marginLeft: '3rem',
        marginBottom: '2rem',
        margin: '20px',
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
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },

    content: {
        fontWeight: 600,
        paddingBottom: '25px',
    },

    messageInput: {
        height: '75px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));
const MessengerChat = () => {
    const classes = useStyles();

    const [MessengerMenu, setMessengerMenu] = useState(false);
    const [searchMessages, setSearchMessages] = useState(' ');

    return (
        <div className={classes.mainContainer}>
            <Box
                className={classes.header}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    className={classes.groupHeaderText}
                >
                    <Box>
                        <img
                            src={placeholderImage}
                            alt=""
                            className={classes.groupAvatar}
                        />
                    </Box>
                    <Box className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.groupHeader}
                        >
                            Into The Cryptoverse{' '}
                        </Typography>
                        <Typography component="p">
                            27, 145 members,{' '}
                            <span style={{ color: '#1D9F6E' }}>
                                1649 online{' '}
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    className={classes.iconsContainer}
                >
                    <SearchRounded
                        className={classes.searchIcon}
                        fontSize="large"
                    />

                    <Ellipsis color="#69BDA2" height="2rem" />
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                className={classes.pinnedMessage}
            >
                <Box>
                    <Typography variant="body1" style={{ color: '#39AB80' }}>
                        <Divider orientation="vertical" />
                        Pinned Message
                    </Typography>

                    <Typography component="p">
                        <Divider orientation="vertical" />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </Typography>
                </Box>

                <Box>
                    <FaThumbtack color="#69BDA2" fontSize="1.5rem" />
                </Box>
            </Box>

            <Messages />

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                className={classes.messageInput}
            >
                <FaThumbtack style={{ margin: '0 20px' }} />
                <TextField
                    style={{ width: '690px' }}
                    placeholder="Ask a Question or Post a Comment"
                    InputProps={{ disableUnderline: true }}
                />
                <FaThumbtack style={{ margin: '0 20px' }} />
                <FaThumbtack style={{ margin: '0 20px' }} />
            </Box>
        </div>
    );
};

export default MessengerChat;
