import { Grid, IconButton, makeStyles, Box } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';

const useStyles = makeStyles(() => ({
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
        marginLeft: '38px',
        height: '75px',
        border: 'none',
        paddingLeft: '15px ',
        width: '541.38px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    emojiButtons: { marginBottom: '15px' },
}));

const InputComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.inputContainer}>
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
        </div>
    );
};

export default InputComponent;
