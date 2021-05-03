import React, { useState } from 'react';
import {
    Button,
    Grid,
    InputBase,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

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
        fontWeight: '900',
        opacity: '1',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '20px 20px 20px 40px',
            width: '400px',
        },
    },

    logoContainer: {
        marginLeft: '200px',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginTop: '40px',
            marginBottom: '1rem',
            marginLeft: '100px',
        },
    },

    header: {
        textTransform: 'uppercase',
        color: '#29A475',
        marginTop: '100px',
        marginBottom: '30px',
        fontSize: '20px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    },

    descText: {
        fontSize: '17px',
        letterSpacing: 0,
        color: '#282728',
        opacity: 1,
    },

    inputField: {
        width: '335px',
        fontSize: '1rem',
        height: '69px',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        marginTop: '15px',
        padding: ' 0 0 0 40px ',
        margin: '.5rem 0 .5rem 5.5rem',
        marginRight: '10px',
        borderRadius: '10px',
        marginLeft: '10px',
        color: '#707070',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
        },
    },

    createAccount: {
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

    infoText: {
        margin: '2rem 0 2rem 5.5rem',
        width: '309px',
        fontSize: '14px',
        alignItems: 'center',
        color: '#282728',
        [theme.breakpoints.down('sm')]: {
            margin: '2rem 0 2rem 2rem',
            width: '280px',
        },
    },
}));

const SignUp = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [channel, setChannel] = useState('');

    const emailValidation = (email) => {
        const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexPattern.test(String(email).toLowerCase());
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            channel: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                    <img
                        src={logo}
                        width={503}
                        height={384}
                        alt="Credit Berkley"
                    />
                </Grid>

                <Grid item className={classes.boxContainer}>
                    <Typography
                        component="p"
                        variant="primary"
                        bold
                        className={classes.header}
                    >
                        Sign Up{' '}
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <InputBase
                            className={classes.inputField}
                            autoComplete
                            type="text"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <InputBase
                            className={classes.inputField}
                            autoComplete
                            type="text"
                            value={formik.values.password}
                            placeholder="Password"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <InputBase
                            className={classes.inputField}
                            autoComplete
                            type="text"
                            value={formik.values.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <InputBase
                            className={classes.inputField}
                            autoComplete
                            type="text"
                            value={formik.values.channel}
                            placeholder="How did you hear about us?"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Typography component="p" className={classes.infoText}>
                            By clicking Create Account; I accept the terms of
                            service.
                        </Typography>
                        <Button className={classes.createAccount}>
                            Create Account
                        </Button>
                    </form>
                    <Typography component="p" className={classes.infoText}>
                        I already have an account,
                        <Link
                            to="login"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <b>Sign In</b>{' '}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUp;
