import React from 'react';
import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        alignItems: 'center',
    },

    iconButton: {
        width: '42px',
        height: '42px',
        marginTop: '51px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    btnContainer: {
        marginTop: '25.5px',
    },
    hamburgerContainer: {
        height: '57px',
        width: '57px',
    },
    hamburger: {
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '50%',
    }
    }
));
const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.sidebarContainer}
                
        >
            {/* TO DO : Remove the duplicate by looping through this */}
            <div className={classes.hamburgerContainer}>
                <IconButton className={classes.hamburger}>
                    <Hamburger />
                </IconButton>
            </div>
            <div className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
<<<<<<< Updated upstream
            </div>
            <div className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
            </div>
            <div className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
            </div>
            <div className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
            </div>
            <div className={classes.btnContainer}>
=======

                <Typography component="p" className={classes.iconButtonText}>
                    Credit Cards
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Credit Cards
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Credit Cards
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>

                <Typography component="p" className={classes.iconButtonText}>
                    Credit Cards
                </Typography>
            </ListItem>
            <ListItem className={classes.btnContainer}>
>>>>>>> Stashed changes
                <IconButton className={classes.iconButton}>
                    <LightningIcon />
                </IconButton>
            </div>

<<<<<<< Updated upstream
            <div className={classes.btnContainer}>
                <Button
                    style={{
                        height: '66px',
                        width: '80px',
                        marginTop: '100px',
                        color: '#1D9F6EA2',
                        boxShadow:
                            '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
                    }}
                >
                    Join
                </Button>
            </div>
=======
                <Typography component="p" className={classes.iconButtonText}>
                    Credit Cards
                </Typography>
            </ListItem>

            <Button className={classes.joinBtn}>Join Credit Berkeley</Button>
>>>>>>> Stashed changes
        </Box>
    );
};

export default Sidebar;
