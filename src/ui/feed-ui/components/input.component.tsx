import { Grid, makeStyles, Box, TextField } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
    inputContainer: {
        width: '852px',
        borderRadius: '10px',
        display: 'flex',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        flexDirection: 'row',
        height: '110px',
        alignItems: 'center',
        textAlign: 'center',
        [breakpoints.down('sm')]: {
            width: '325px',
            height: '66px',
        },
    },

    input: {
        height: '75px',
        border: 'none',
        marginLeft: '34px',
        paddingLeft: '15px ',
        width: '541.38px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        [breakpoints.down('sm')]: {
            height: '42px',
            width: '208px',
            marginRight: '20px',
            marginLeft: '20px',
            '&::placeholder': { fontSize: '10px' },
        },
    },

    emojiContainer: {
        alignItems: 'center',
        marginLeft: '117px',
        justifyContent: 'center',
        margin: 'auto 0',
        [breakpoints.down('sm')]: {
            marginLeft: '20px',
            marginRight: '10px',
        },
    },

    inputIcon: {
        height: '40px',
        marginRight: '24px',
        [breakpoints.down('sm')]: {
            height: '15px',
            marginRight: '5px',
        },
    },
}));

const InputComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.inputContainer}>
                <TextField
                    fullWidth
                    className={classes.input}
                    placeholder="Ask a question or Post something"
                    InputProps={{ disableUnderline: true }}
                />

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-evenly"
                    className={classes.emojiContainer}
                >
                    <LightningIcon className={classes.inputIcon} />

                    <LightningIcon className={classes.inputIcon} />

                    <LightningIcon className={classes.inputIcon} />
                </Box>
            </Grid>
        </div>
    );
};

export default InputComponent;
