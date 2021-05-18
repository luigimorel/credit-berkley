import { Grid, IconButton, makeStyles, Box } from '@material-ui/core';
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
        paddingLeft: '15px ',
        width: '541.38px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        '&::placeholder': { fontSize: '10px' },
        [breakpoints.down('sm')]: {
            width: '208px',
            height: '42px',
            marginRight: '20px',
            marginLeft: '20px',
        },
    },

    emojiButtons: {},
    emojiContainer: {
        [breakpoints.down('sm')]: {
            width: '10px',
            marginRight: '20px',
        },
    },
}));

const InputComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.inputContainer}>
                <input
                    color="inherit"
                    className={classes.input}
                    placeholder="Ask a question or Post something"
                />

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    className={classes.emojiContainer}
                >
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon height="15px" />
                    </IconButton>
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon height="15px" />
                    </IconButton>

                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon height="15px" />
                    </IconButton>
                </Box>
            </Grid>
        </div>
    );
};

export default InputComponent;
