import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    InputBase,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {} from 'formik';

import logo from '../../assets/bc-logo.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    boxContainer: {
        width: '500px',
        height: 'auto',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        opacity: '1',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '20px 20px 20px 20px',
        },
    },

    logoContainer: {
        marginLeft: '200px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: '40px',
            marginBottom: '1rem',
        },
    },

    header: {
        textTransform: 'uppercase',
        color: '#29A475',
        fontSize: '20px',
        marginTop: '100px',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            marginTop: '30px',
        },
    },
    infoText: {
        margin: '.5rem 0 .5rem 5.5rem',
        width: '309px',
        fontSize: '14px',
        alignItems: 'center',
        color: '#282728',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
            margin: '.5rem 0 .5rem .5rem',
        },
    },

    inputField: {
        width: '335px',
        fontSize: '1rem',
        height: '69px',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        marginTop: '15px',
        padding: ' 0 0 0 40px ',
        borderRadius: '10px',
        marginRight: '10px',
        marginLeft: '10px',
        color: '#707070',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
        },
    },

    otpWrapper: {
        fontSize: '1rem',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '40px',
        alignItems: 'center',
        marginBottom: '20px',
        color: '#707070',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
            marginLeft: '15px',
        },
    },

    otpInputField: {
        width: '60px',
        fontSize: '16px',
        height: '60px',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        margin: '4px 10px 4px 30px',
        position: 'relative',
        color: '#707070',
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            margin: '2px 10px 2px 5px',
            height: '60px',
        },
    },

    btnFindAccount: {
        width: '335px',
        height: '66px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '10px',
        color: '#1D9F6EA2',
        fontSize: '1rem',
        opacity: 1,
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
        },
    },

    btnCancel: {
        width: '335px',
        height: '66px',
        fontSize: '1rem',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        border: '1px solid #68BEA2',
        color: '#1D9F6EA2',
        borderRadius: '10px',
        marginBottom: '4rem',
        opacity: 1,
        textTransform: 'capitalize',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
        },
    },
}));

const ResetPassword = () => {
    const classes = useStyles();

    const [password, setPassword] = useState('');
    const [otpValue, setOtpValue] = useState('');

    const emailValidation = (email: string) => {
        const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexPattern.test(String(email).toLowerCase());
    };

    const CODE_LENGTH = new Array(5).fill(0);
    const values = otpValue.split('');

    return (
        <>
            <Grid
                container
                className={classes.container}
                lg={12}
                md={12}
                sm={12}
            >
                <Grid item className={classes.logoContainer}>
                    <img src={logo} alt="Credit Berkley" />
                </Grid>

                <Grid item className={classes.boxContainer}>
                    <Typography
                        component="p"
                        className={classes.header}
                    >
                        Reset Account Password{' '}
                    </Typography>

                    <Box className={classes.otpWrapper}>
                        {CODE_LENGTH.map((v, index) => {
                            return (
                                <InputBase
                                    className={classes.otpInputField}
                                    inputProps={{ maxLength: 1 }}
                                    type="text"
                                    onChange={(event) =>
                                        setOtpValue(event.target.value)
                                    }
                                />
                            );
                        })}
                    </Box>
                    <InputBase
                        className={classes.inputField}
                        type="text"
                        placeholder="New Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button
                        className={classes.btnFindAccount}
                        style={{ margin: '2rem 0 2rem 0' }}
                    >
                        <Link to="reset-password"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <b>Reset</b>
                        </Link>
                    </Button>

                    <Button className={classes.btnCancel}>
                        Look Up Your Account
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default ResetPassword;
