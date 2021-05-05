import React from 'react'
import {makeStyles, Box, Typography} from "@material-ui/core"

import Illustration from '../../../assets/imgIllustration.jpg';

const useStyles = makeStyles((theme) => ({
    accountsContainer: { marginTop: '3rem', height: '445px', width: '852px' },
    account: {
        height: '190px',
        marginRight: '1.8rem',
        width: '264px',
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    textContainer: {
        marginLeft: '1.5rem',
    },
    accountsHeader: {
        margin: '1.5rem  0 0 0 ',
        color: '#1D9F6E',
        fontSize: '1rem',
        fontWeight: 'bolder',
    },
    accountsSpan: {
        margin: '.8rem 0 0 0',
        color: '#9E9E9E',
    },
    illustration: {
        height: '87px',
        width: '115px',
        float: 'right',
        marginTop: '1.6rem',
    },
}));
const Accounts = () => {

    const classes = useStyles()
    return (
        <div>
            <Box
                display="flex"
                flexDirection="row"
                className={classes.accountsContainer}
            >
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Credit
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            Last checked: Feb 29, 2020
                        </Typography>
                    </div>

                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Accounts
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            4 active account
                        </Typography>
                    </div>

                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Tax
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            Star my taxes now
                        </Typography>
                    </div>

                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                className={classes.accountsContainer}
            >
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Auto
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            Link your cars and drivers
                        </Typography>
                    </div>
                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Housing
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            Discover your buying power
                        </Typography>
                    </div>
                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
                <Box className={classes.account}>
                    <div className={classes.textContainer}>
                        <Typography
                            component="p"
                            className={classes.accountsHeader}
                        >
                            Savings
                        </Typography>
                        <Typography
                            component="span"
                            className={classes.accountsSpan}
                        >
                            Savings
                        </Typography>
                    </div>
                    <img
                        src={Illustration}
                        className={classes.illustration}
                        alt=""
                    />
                </Box>
            </Box>
        </div>
    );
}

export default Accounts
