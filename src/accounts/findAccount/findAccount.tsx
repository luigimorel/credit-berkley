import React, { useState } from "react";
import {
    Button,
    Theme,
  Grid,
  InputBase,
    TextField,
    Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {useFormik} from 'formik'

import logo from "../../assets/bc-logo.jpg";

const useStyles = makeStyles((theme) => ({
    
    container: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    boxContainer: {
        width: '537px',
        height: '611px',
        margin: '100px 30px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        opacity: '1',
        textAlign: 'center',
        paddingBottom: '80px',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            width: '350px',
            margin: '50px 15px',
        },
    },

    logoContainer: {
        margin: '50px 0',
        [theme.breakpoints.down('sm')]: {
            margin: '25px 0',
        },
    },

    header: {
        textTransform: 'uppercase',
        color: '#29A475',
        margin: '50px 15px',
        fontSize: '20px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            margin: '25px 0',
        },
    },
    infoText: {
        margin: '1rem',
    },

    inputField: {
        width: '335px',
        fontSize: '1rem',
        height: '69px',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        marginTop: '15px',
        padding: ' 0 0 0 40px ',
        marginRight: '10px',
        borderRadius: '10px',
        marginLeft: '10px',
        color: '#707070',
        [theme.breakpoints.down('sm')]: {
            width: '280px',
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

const FindAccount = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");

  const emailValidation = (email: string) => {
    const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexPattern.test(String(email).toLowerCase());
  };

     const formik = useFormik({
         initialValues: {
             email: '',
           
         },
         onSubmit: (values) => {
             alert(JSON.stringify(values, null, 2));
         },
     });
  return (
      <>
          <Grid container className={classes.container} lg={12} md={12} sm={12}>
              <Grid item className={classes.logoContainer}>
                  <img src={logo} alt="Credit Berkley" />
              </Grid>

              <Grid item className={classes.boxContainer}>
                  <Typography component="p" className={classes.header}>
                      Find your account
                  </Typography>

                  <Typography component="p" className={classes.infoText}>
                      Please enter your email address  to reset your password.
                  </Typography>

                  <InputBase
                      className={classes.inputField}
                      autoComplete="email"
                      type="text"
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                  />

                  <Button
                      className={classes.btnFindAccount}
                      style={{ margin: '2rem 0 2rem 0' }}
                  >
                      <Link
                          to="/find-account"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                          <b> Find Account</b>
                      </Link>
                  </Button>

                  <Button className={classes.btnCancel}>
                      <b>Cancel</b>
                  </Button>
              </Grid>
          </Grid>
      </>
  );
};

export default FindAccount;
