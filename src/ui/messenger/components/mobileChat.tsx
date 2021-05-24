import {
    TextField,
    Divider,
    Typography,
    makeStyles,
    Box,
} from '@material-ui/core';

import placeholderImage from '../../../assets/person.jpg';
import { FaEllipsisV } from 'react-icons/fa';
import {
    ArrowBack,
    Attachment,
    DoneAll,
    EmojiEmotionsOutlined,
    MicRounded,
} from '@material-ui/icons';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: { margin: '0 25px' },

    header: {
        height: 'auto   ',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    groupHeaderText: {
        marginBottom: '19px',
        borderRadius: '10px',
        marginTop: '1rem',
        '&::hover': {
            boxShadow:
                ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        },
    },

    groupAvatar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '21px',
        width: 'auto',
        padding: '1rem',
        background:
            'transparent radial-gradient(closest-side at 0% 0%, #FFFFFF9D 0%, #92929214 100%) 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },

    textContainer: { marginLeft: '25px' },

    groupHeader: {
        fontWeight: 600,
        fontSize: '12px',
        marginBottom: '5px',
    },

    iconsContainer: {
        margin: '2rem',
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

    content: {
        fontWeight: 600,
        paddingBottom: '25px',
    },

    messageInput: {
        height: '75px',
        position: 'fixed',
        bottom: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    message: {
        fontSize: '12px',
    },

    backBtn: {
        height: '17px',
        color: '#69BDA2',
        margin: 'auto 25px auto 0',
    },
}));

const MobileChat = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.header} display="flex" flexDirection="row">
                <ArrowBack className={classes.backBtn} />
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                    flexGrow={1}
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
                            <Typography
                                component="p"
                                style={{ fontSize: '8px' }}
                            >
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
                        <FaEllipsisV color="#69BDA2" height="2rem" />
                    </Box>
                </Box>
            </Box>

            <Box className={classes.mainContainer}>
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
                    <Box
                        className={classes.textContainer}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Box>
                            <Typography component="p">
                                <span
                                    style={{
                                        color: '#1D9F6E',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                    }}
                                >
                                    Wildan Wari
                                </span>
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.message}
                            >
                                Why do you have to go to Indonesia?
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                float: 'right',
                                color: '#9E9E9E',
                                fontSize: '10px',
                            }}
                        >
                            12:30 {'  '} <DoneAll />
                        </Box>
                    </Box>
                </Box>
                <Divider />
                {/* Duplicates  */}
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
                    <Box
                        className={classes.textContainer}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Box>
                            <Typography component="p">
                                <span
                                    style={{
                                        color: '#1D9F6E',
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                    }}
                                >
                                    Wildan Wari
                                </span>
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.message}
                            >
                                Why do you have to go to Indonesia?
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                float: 'right',
                                color: '#9E9E9E',
                                fontSize: '10px',
                            }}
                        >
                            12:30 {'  '} <DoneAll />
                        </Box>
                    </Box>
                </Box>
                <Divider />
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
                    <Box
                        className={classes.textContainer}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Box>
                            <Typography component="p">
                                <span
                                    style={{
                                        color: '#1D9F6E',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Wildan Wari
                                </span>
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.message}
                            >
                                Why do you have to go to Indonesia?
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                float: 'right',
                                color: '#9E9E9E',
                                fontSize: '10px',
                            }}
                        >
                            12:30 {'  '} <DoneAll />
                        </Box>
                    </Box>
                </Box>
                <Divider />
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
                    <Box
                        className={classes.textContainer}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Box>
                            <Typography component="p">
                                <span
                                    style={{
                                        color: '#1D9F6E',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Wildan Wari
                                </span>
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.message}
                            >
                                Why do you have to go to Indonesia?
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                color: '#9E9E9E',
                                fontSize: '10px',
                            }}
                        >
                            12:30 {'  '} <DoneAll />
                        </Box>
                    </Box>
                </Box>
                <Divider />
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
                    <Box
                        className={classes.textContainer}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        flexGrow={1}
                    >
                        <Box>
                            <Typography component="p">
                                <span
                                    style={{
                                        color: '#1D9F6E',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Wildan Wari
                                </span>
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.message}
                            >
                                Why do you have to go to Indonesia?
                            </Typography>
                        </Box>
                        <Box
                            style={{
                                float: 'right',
                                color: '#9E9E9E',
                                fontSize: '10px',
                            }}
                        >
                            12:30 {'  '} <DoneAll />
                        </Box>
                    </Box>
                </Box>
                <Divider />
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                className={classes.messageInput}
            >
                <EmojiEmotionsOutlined
                    style={{ margin: '0 20px', color: '#7C8DB5' }}
                />
                <TextField
                    style={{
                        width: '100%',
                        height: 'auto',
                        background: '#ECF3FD',
                        boxShadow:
                            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
                    }}
                    rowsMax={4}
                    placeholder="Message"
                    InputProps={{ disableUnderline: true }}
                />

                <Attachment
                    style={{
                        margin: '0 10px',
                        transform: 'rotate(310deg)',
                        color: '#7C8DB5',
                    }}
                />
                <MicRounded
                    style={{
                        margin: '0 10px',
                        color: '#7C8DB5',
                    }}
                />
            </Box>
        </>
    );
};

export default MobileChat;
