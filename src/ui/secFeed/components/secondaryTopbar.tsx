import { Grid, makeStyles, Box, IconButton } from '@material-ui/core';

import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';
import avatar from '../../../assets/avatar.jpg';

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '110px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
    },

    inputContainer: {
        width: '852px',
        borderRadius: '10px',
        display: 'flex',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        flexDirection: 'row',
        height: '110px',
        alignItems: 'center',
        textAlign: 'center',
    },

    input: {
        height: '75px',
        border: 'none',
        paddingLeft: '15px ',
        width: '541.38px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    emojiButtons: {
        marginBottom: '15px',
    },
    emojiContainer: {
        display: 'flex',
        justifyItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: '127px',
        width: '10px',
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

    avatar: {
        marginLeft: '30px',
        marginRight: '20px',
    },
}));

const SecondaryTopbar = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="row"
            p={1}
            className={classes.mainContainer}
        >
            <Grid className={classes.inputContainer}>
                <img
                    src={avatar}
                    height="65px"
                    width="55px"
                    className={classes.avatar}
                    alt=""
                />
                <input
                    color="inherit"
                    className={classes.input}
                    placeholder="Ask a question or Post a comment"
                />

                <Box p={1} m={1} display="flex" flexDirection="row">
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>

                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Box>
    );
};

export default SecondaryTopbar;
