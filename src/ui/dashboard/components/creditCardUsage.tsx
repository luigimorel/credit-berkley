import {
    Box,
    Button,
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';
import ScaledBar from './charts/scaledBar';

const useStyles = makeStyles(() => ({
    mainContainer: {
        margin: '1.5rem ',
    },
    heading: {
        margin: '1rem 0',
    },
    chartContainer: {
        height: '200px',
        alignItems: 'center',
    },
    limitContainer: {
        marginLeft: '20px',
    },
    container: {
        width: '200px',
    },
    bottomText: {
        color: '#212121',
        fontSize: '20px',
        margin: '1rem auto ',
    },
    secBottomText: {},
}));

const CreditCardUsage = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Typography component="p">CREDIT CARD USAGE</Typography>
            <Typography component="p" variant="h5" className={classes.heading}>
                You are using 9% of your credit limit
            </Typography>

            <Box className={classes.chartContainer}>
                <Box style={{ margin: '1rem auto' }}>
                    <ScaledBar value={12565} />
                </Box>{' '}
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                className={classes.limitContainer}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.container}
                >
                    <Typography
                        component="span"
                        variant="h6"
                        style={{ color: '#9E9E9E' }}
                    >
                        Change
                    </Typography>

                    <Typography
                        component="span"
                        variant="h6"
                        style={{ color: '#9E9E9E' }}
                    >
                        14%
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    className={classes.container}
                >
                    <Typography
                        component="span"
                        variant="h6"
                        style={{ color: '#9E9E9E' }}
                    >
                        Credit Limit{' '}
                    </Typography>
                    <Typography
                        component="span"
                        variant="h6"
                        style={{ color: '#9E9E9E' }}
                    >
                        $145,000
                    </Typography>
                </Box>
            </Box>
            <Typography
                className={classes.bottomText}
                component="p"
                variant="body2"
            >
                Your credit card usage is great! Keep it below 10% on each card
                for optimal impact. The lower the better!
            </Typography>

            <Typography
                className={classes.secBottomText}
                component="p"
                variant="body2"
                style={{ color: '#9E9E9E' }}
            >
                From March 20, 2021 TransUnion Report
            </Typography>
            <Divider style={{ margin: '2rem 0' }} />

            <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                    style={{
                        margin: '0 auto',
                        position: 'absolute',
                        fontSize: '20px',
                        height: '3rem',
                        color: '#1D9F6E',
                        textTransform: 'capitalize',
                        width: '180px',
                        fontWeight: 'bold',
                    }}
                >
                    Explain
                </Button>
            </Box>
        </div>
    );
};

export default CreditCardUsage;
