import React, { useState } from 'react';
import {
    Grid,
    makeStyles,
    Box,
    InputBase,
    Button,
    Select,
    Typography,
    Divider,
    TextField,
    Checkbox,
    MenuList,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import clsx from 'clsx'
import { FaGoogle,  } from 'react-icons/fa';
import Facebook from '@material-ui/icons/Facebook';
import { FaPlus } from 'react-icons/fa';

import logo from '../../assets/bc-logo.jpg';
import ImageUploader from './components/imageUploader';

const useStyles = makeStyles((theme) => ({
    form: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        opacity: 1,
        width: '60%',
    },
    img: {
        display: 'block',
        margin: ' 0 auto',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: theme.spacing(4),
    },
    imgContainer: {
        marginBottom: '50px',
    },
    infoText: {
        color: '#282728',
        fontSize: '20px',
        marginLeft: '40.71px',
    },
    heading: {
        color: '#1D9F6E',
        fontSize: '20px',
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '40.71px',
        fontWeight: 'bolder',
    },
    formContainer: {
        display: 'flex',
        marginLeft: '50px',
        marginRight: '50px',
        flexDirection: 'row',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        top: '0px',
        marginBottom: '22px',
    },
    signUpContainer: {
        height: '180px',
        borderRadius: '10px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    sideText: {
        marginTop: '30px',
        fontSize: '16px',
        marginRight: '38.04px',
    },

    signInWithContainer: {
        height: '310px',
        width: '386px',
        marginLeft: '39px',
        alignItems: 'center',
        paddingBottom: '30px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '10px',
    },
    signInWithHeading: {
        color: '#1D9F6E',
        fontSize: '20px',
        margin: '30px auto 40.65px auto',
        textAlign: 'center',
        fontWeight: 'bolder',
    },
    signInWithButtons: {
        height: '66px',
        borderRadius: '10px',
        width: '335px',
        margin: theme.spacing(2),
        boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
    },

    registerBtn: {
        letterSpacing: 0,
        color: ' #1D9F6EA2',
        borderRadius: '10px',
        width: '335px',
        height: '66px',
        marginTop: '70px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        fontWeight: 'bolder',
        textTransform: 'capitalize',
        marginBottom: '74px',
    },
    registerContainer: {
        margin: '0 auto',
        display: 'block',
        textAlign: 'center',
    },
    formInputContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        borderRadius: '10px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        opacity: 1,
        paddingTop: '1px',
        position: 'relative',
    },

    sectionHeading: {
        color: '#1D9F6E',
        fontSize: '20px',
        marginTop: '30px',
        marginLeft: '40.71px',
        fontWeight: 'bolder',
    },
    inputDiv: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '40.71px',
        borderRadius: '10px',
        marginRight: '40.71px',
    },
    inputField: {
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '10px',
        padding: '10px 10px 10px 35.46px',
        height: '75px',
    },
    inputTextField: {
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        height: '75px',
        borderRadius: '10px',
    },
    inputFieldSelect: {
        padding: '10px',
        height: '75px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },

    label: {
        fontSize: '16px',
        fontWeight: 'bolder',
        marginTop: '20px',
        marginBottom: '25px',
    },
    formControl: {
        margin: theme.spacing(2)
    },
    termsLink: {
        right: 0,
        marginLeft: '40.71px',
    },
    termsUrl: {
        textDecoration: 'none',
        color: '#1D9F6E',
    },
    divider: {
        margin: '15px 41px 0 41px',
    },
}));
const SignUpSecondary = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [country, setCountry] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [financialGoal, setFinancialGoal] = useState('');
    const [referrer, setReferrer] = useState('');
    const [blogLink, setBlogLink] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            displayName: '',
            country: ' ',
            avatar: '',
            bio: '',
            financialGoal: '',
            referrer: '',
            blogLink: '',
            checkBox: false,
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const emailValidation = (email: string) => {
        const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexPattern.test(String(email).toLowerCase());
    };
    return (
        <div className={classes.mainContainer}>
            <div className={classes.imgContainer}>
                <img
                    height="205px"
                    width="263px"
                    src={logo}
                    alt="Credit Berkley"
                    className={classes.img}
                />
            </div>

            <Grid md={12} sm={12} lg={6} className={classes.formContainer}>
                <Grid item className={classes.form}>
                    <div className={classes.signUpContainer}>
                        <div className={classes.textContainer}>
                            <Typography
                                variant="h2"
                                className={classes.heading}
                            >
                                <b> Sign Up</b>{' '}
                            </Typography>
                            <Typography
                                component="p"
                                className={classes.sideText}
                            >
                                Already registered?{' '}
                                <b
                                    style={{
                                        color: '#131313',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Sign In Now
                                </b>
                            </Typography>
                        </div>
                        <Typography component="p" className={classes.infoText}>
                            Connect with like-minded individuals for the tips
                            and support <br /> on making, saving and managing
                            your money.
                        </Typography>
                    </div>

                    <Grid className={classes.formInputContainer}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid>
                                <Typography
                                    variant="h3"
                                    className={classes.sectionHeading}
                                >
                                    Account Credentials
                                </Typography>
                                <Divider className={classes.divider} />
                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="email"
                                        className={classes.label}
                                    >
                                        Email Address
                                    </label>

                                    <InputBase
                                        className={classes.inputField}
                                        autoComplete="email"
                                        type="text"
                                        value={formik.values.email}
                                        placeholder="Username or Email"
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>

                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="password"
                                        className={classes.label}
                                    >
                                        Password (8 - 40 characters)
                                    </label>
                                    <InputBase
                                        className={classes.inputField}
                                        type="password"
                                        value={formik.values.password}
                                        placeholder="Password"
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                </div>
                            </Grid>
                            {/* Profile grid */}
                            <Grid>
                                <Typography
                                    variant="h3"
                                    className={classes.sectionHeading}
                                >
                                    Your Profile
                                </Typography>
                                <Divider className={classes.divider} />
                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="displayName"
                                        className={classes.label}
                                    >
                                        Display Name{' '}
                                    </label>

                                    <InputBase
                                        className={classes.inputField}
                                        type="text"
                                        placeholder="Type Name"
                                        value={formik.values.displayName}
                                        onChange={(event) =>
                                            setDisplayName(event.target.value)
                                        }
                                    />
                                </div>
                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="password"
                                        className={classes.label}
                                    >
                                        Your Country
                                    </label>

                                    <Select
                                        className={clsx(
                                            classes.inputFieldSelect,
                                            classes.formControl,
                                        )}
                                        value={formik.values.country}
                                        inputProps={{
                                            'aria-label': 'Select Country',
                                        }}
                                        renderValue={
                                            country !== ''
                                                ? undefined
                                                : () => <>Select Country</>
                                        }
                                    >
                                        <MenuList>Option One</MenuList>
                                    </Select>
                                </div>
                            </Grid>

                            {/* Grid for the profile image  */}
                            <Grid>
                                <Typography
                                    variant="h3"
                                    className={classes.sectionHeading}
                                >
                                    Profile Picture / Avatar{' '}
                                    <span
                                        style={{
                                            color: '#282728',
                                            fontSize: '16px',
                                        }}
                                    >
                                        (optional)
                                    </span>
                                </Typography>
                                <Divider className={classes.divider} />
                                <div className={classes.inputDiv}>
                                    <Typography
                                        component="p"
                                        style={{
                                            marginTop: '30px',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        Avatars should be at least 300px wide by
                                        300px height
                                    </Typography>
                                    <ImageUploader />
                                </div>
                            </Grid>

                            {/* Grid for other personal information */}
                            <Grid>
                                <Typography
                                    variant="h3"
                                    className={classes.sectionHeading}
                                >
                                    Other Profile Information
                                </Typography>
                                <Divider className={classes.divider} />

                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="bio"
                                        className={classes.label}
                                    >
                                        Bio (optional)
                                    </label>

                                    <TextField
                                        placeholder="Tell us something about you"
                                        multiline
                                        variant="outlined"
                                        size="medium"
                                        value={formik.values.bio}
                                        rows={2}
                                        onChange={(event) =>
                                            setBio(event.target.value)
                                        }
                                        className={classes.inputTextField}
                                    />
                                </div>

                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="financialGoal"
                                        className={classes.label}
                                    >
                                        Select your your top financial goal{' '}
                                    </label>

                                    <Select
                                        className={clsx(
                                            classes.inputFieldSelect,
                                            classes.formControl,
                                        )}
                                        displayEmpty
                                        value={formik.values.financialGoal}
                                        inputProps={{
                                            'aria-label':
                                                'Select your top financial goal',
                                        }}
                                        renderValue={
                                            financialGoal !== ''
                                                ? undefined
                                                : () => <>Choose One </>
                                        }
                                    >
                                        <MenuList>Option One</MenuList>
                                        <MenuList>Option One</MenuList>
                                    </Select>
                                </div>

                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="referrer"
                                        className={classes.label}
                                    >
                                        Who referred you to the community?
                                        (optional){' '}
                                    </label>

                                    <TextField
                                        multiline
                                        variant="outlined"
                                        size="medium"
                                        rows={2}
                                        value={formik.values.referrer}
                                        className={classes.inputTextField}
                                        placeholder="Tell us something about that"
                                        onChange={(event) =>
                                            setReferrer(event.target.value)
                                        }
                                    />
                                </div>

                                <div className={classes.inputDiv}>
                                    <label
                                        htmlFor="blogLink"
                                        className={classes.label}
                                    >
                                        Add a link to your website or blog!
                                        (optional)
                                    </label>

                                    <InputBase
                                        type="url"
                                        className={classes.inputField}
                                        placeholder="Add link"
                                        value={formik.values.blogLink}
                                        onChange={(event) =>
                                            setBlogLink(event.target.value)
                                        }
                                        endAdornment={
                                            <FaPlus
                                                style={{
                                                    color: "'#1D9F6E",
                                                }}
                                            />
                                        }
                                    />
                                </div>
                            </Grid>

                            <Grid>
                                <Typography
                                    variant="h3"
                                    className={classes.sectionHeading}
                                >
                                    Terms of Service
                                </Typography>
                                <Divider className={classes.divider} />

                                <div style={{ marginTop: '20px' }}>
                                    <Checkbox
                                        className={classes.termsLink}
                                        value={formik.values.checkBox}
                                    />
                                    I agree to the{' '}
                                    <Link
                                        to="/terms-of-service"
                                        className={classes.termsUrl}
                                    >
                                        Terms of Service
                                    </Link>
                                </div>
                            </Grid>

                            <Box className={classes.registerContainer}>
                                <Button
                                    className={classes.registerBtn}
                                    fullWidth
                                >
                                    Register Now
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>

                {/* Sign in with facebook or google buttons  */}
                <Grid item className={classes.signInWithContainer}>
                    <Typography
                        variant="h3"
                        className={classes.signInWithHeading}
                    >
                        Or Sign In With
                    </Typography>

                    <div>
                        <Button
                            className={classes.signInWithButtons}
                            color="inherit"
                            variant="text"
                            startIcon={<Facebook />}
                            fullWidth
                        >
                            Facebook
                        </Button>

                        <Button
                            color="inherit"
                            variant="text"
                            className={classes.signInWithButtons}
                            startIcon={<FaGoogle />}
                            fullWidth
                        >
                            Google
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUpSecondary;
