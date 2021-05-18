import {
    Box,
    Button,
    IconButton,
    ListItem,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        alignItems: 'center',
    },

    iconButton: {
        width: '42px',
        height: '42px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    btnContainer: {
        marginTop: '33px',
        alignContent: 'center',
        width: '315px',
        height: '66px',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hamburgerContainer: {
        height: '57px',
        width: '57px',
        marginTop: '77px',
    },

    hamburger: {
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '50%',
    },

    joinBtn: {
        width: '198px',
        borderRadius: '10px',
        padding: '21px 18px',
        height: '80px',
        fontWeight: 'bolder',
        marginTop: '100px',
        color: '#1D9F6EA2',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    iconButtonText: {
        marginLeft: '2rem',
        color: '#6D7D8F',
        '&:hover': {
            color: '#1D9F6E',
        },
    },
}));
const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.sidebarContainer}
        >
            {/* TO DO : Remove the duplicate by looping through this */}
            <Box className={classes.hamburgerContainer}>
                <IconButton className={classes.hamburger}>
                    <Hamburger />
                </IconButton>
            </Box>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Option One
                </Typography>
            </ListItem>

            <Button className={classes.joinBtn}>Join</Button>
        </Box>
    );
};

export default Sidebar;
