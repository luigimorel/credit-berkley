import React from 'react';
import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';

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
}));
const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexDirection="column"
            className={classes.sidebarContainer}
            p={1}
            m={1}
        >
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
                <Button
                    style={{
                        height: '66px',
                        width: '80px',
                        marginTop: '100px',
                        color: '#1D9F6EA2',
                        background: '#ECF3FD 0% 0% no-repeat padding-box',
                        boxShadow:
                            '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
                    }}
                >
                    Join{' '}
                </Button>
            </div>
        </Box>
    );
};

export default Sidebar;
