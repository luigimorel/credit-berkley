import { makeStyles, Box, Typography, Button } from '@material-ui/core';

import ScaledBar from '../components/charts/scaledBar';

const useStyles = makeStyles(() => ({
    mainContainer: {
        marginTop: '48px',
        marginLeft: '40px',
        marginRight: '100px',
    },

    heading: {
        fontSize: '10px',
        color: '#1D9F6E',
    },
    mainHeading: {
        marginTop: '1rem',
        fontSize: '1rem',
        color: '#1A2E35',
    },
    balanceContainer: {},
    balances: {
        color: '#9E9E9E',
    },
    balanceAmount: {
        color: '#1A2E35',
    },
    accountBar: {
        height: '23px',
        borderRadius: '167px',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#0BBC79',
    },
    accountType: { color: '#9E9E9E' },
    accountBalance: {
        fontSize: '14px',
    },
}));
const AccountHealth = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography component="p" className={classes.heading}>
                ACCOUNTS
            </Typography>
            <Typography component="p" className={classes.mainHeading}>
                How your accounts look today?
            </Typography>
            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography component="p" className={classes.balances}>
                    Total Open Balances
                </Typography>{' '}
                <Typography component="p" className={classes.balanceAmount}>
                    $145,000
                </Typography>
            </Box>
            <Box style={{ margin: '1rem auto' }}>
                <ScaledBar value={12565} />
            </Box>{' '}
            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    alignContent="center"
                >
                    <div
                        style={{
                            backgroundColor: '#1D9F6E',
                            width: '12px',
                            height: '7px',
                            margin: '10px',
                            borderRadius: '10px',
                        }}
                    ></div>

                    <Typography
                        component="p"
                        style={{ fontSize: '10px' }}
                        className={classes.accountType}
                    >
                        Credit Cards{' '}
                    </Typography>
                </Box>
                <Typography component="p" className={classes.accountBalance}>
                    $145,000
                </Typography>
            </Box>{' '}
            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    alignContent="center"
                >
                    <div
                        style={{
                            backgroundColor: '#0BBC79',
                            width: '12px',
                            height: '7px',
                            margin: '10px',
                            borderRadius: '10px',
                        }}
                    ></div>

                    <Typography
                        component="p"
                        style={{ fontSize: '10px' }}
                        className={classes.accountType}
                    >
                        Collections
                    </Typography>
                </Box>
                <Typography component="p" className={classes.accountBalance}>
                    $145,000
                </Typography>
            </Box>{' '}
            <Box
                className={classes.balanceContainer}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    alignContent="center"
                >
                    <div
                        style={{
                            backgroundColor: '#1D9F6E',
                            width: '12px',
                            height: '7px',
                            margin: '10px',
                            borderRadius: '10px',
                        }}
                    ></div>

                    <Typography
                        component="p"
                        style={{ fontSize: '10px' }}
                        className={classes.accountType}
                    >
                        Credit Cards{' '}
                    </Typography>
                </Box>
                <Typography component="p" className={classes.accountBalance}>
                    $145,000
                </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                    style={{
                        margin: '0 auto',
                        position: 'absolute',
                        height: '3rem',
                        color: '#1D9F6E',
                        border: '1px solid #1D9F6E',
                        width: '180px',
                        marginTop: '160px',
                        fontWeight: 'bold',
                    }}
                >
                    VIEW MY ACCOUNTS
                </Button>
            </Box>{' '}
        </div>
    );
};

export default AccountHealth;
