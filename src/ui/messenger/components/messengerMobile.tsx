import {
    Box,
    Typography,
    InputBase,
    makeStyles,
    Divider,
} from '@material-ui/core';
import { format } from 'date-fns';

import MobileMenu from '../../feed-ui/components/mobileMenu';
import placeholderImage from '../../../assets/person.jpg';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        padding: '25px ',
    },

    textField: {
        marginTop: '50px',
        paddingLeft: '10px',
        marginBottom: '32px',
        boxShadow:
            ' inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '10px',
        height: '60px',

        '&::-webkit-input-placeholder': {
            textAlign: 'center',
            margin: '0 auto',
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

    const date = new Date();

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
                <Box
                    className={classes.textContainer}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    flexGrow={1}
                >
                    <Box>
                        <Typography component="p" className={classes.message}>
                            Why do you have to go to Indonesia?
                        </Typography>
                        <Typography component="p" style={{ marginTop: '10px' }}>
                            <span
                                style={{ color: '#1D9F6E', fontSize: '10px' }}
                            >
                                By Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Box style={{ float: 'right', color: '#9E9E9E' }}>12:30</Box>
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
                <Box
                    className={classes.textContainer}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    flexGrow={1}
                >
                    <Box>
                        <Typography component="p" className={classes.message}>
                            Why do you have to go to Indonesia?
                        </Typography>
                        <Typography component="p" style={{ marginTop: '10px' }}>
                            <span
                                style={{ color: '#1D9F6E', fontSize: '10px' }}
                            >
                                By Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                    <Box style={{ float: 'right', color: '#9E9E9E' }}>
                        12:30
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
};

export default MessengerMobile;
