import {
    Box,
    Divider,
    IconButton,
    makeStyles,
    Typography,
} from '@material-ui/core';

import discThumbNail from '../../../assets/visit-place.jpg';
import saveIcon from '../../../assets/secFeedIcons/saveIcon.jpg';

const useStyles = makeStyles(() => ({
    mainContainer: {
        width: '593px',
        height: 'auto',
        marginTop: '50px',
        marginLeft: '61px',
        boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
    },

    heading: {
        color: '#1A2E35',
        fontSize: '22px',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    container: {
        textAlign: 'center',
        margin: '0 61px',
        display: 'flex',
        marginTop: '43px',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    viewAll: {
        color: '#1D9F6E',
        marginLeft: '41px',
        whiteSpace: 'nowrap',
        marginTop: '2px',
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },

    questionPara: {
        fontWeight: 600,
        marginBottom: '25px',
    },

    questionContainer: {
        marginLeft: '1rem',
    },

    question: {
        marginLeft: '61px',
        marginRight: '61px',
        marginBottom: '30px',
        marginTop: '38px',
    },
}));

const LatestDiscussions = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container}>
                <Typography variant="h5" className={classes.heading}>
                    What’s the Latest
                </Typography>
                <Typography component="span" className={classes.viewAll}>
                    View All
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="row "
                className={classes.question}
            >
                <Box>
                    <img src={discThumbNail} height="120" width="auto" alt="" />{' '}
                </Box>
                <Box className={classes.questionContainer}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Typography
                            component="p"
                            className={classes.questionPara}
                        >
                            Why do you have to <br />
                            go to Indonesia ?
                        </Typography>

                        {/* <img
                            src={saveIcon}
                            width="16px"
                            style={{ float: 'right' }}
                            height="20px"
                            alt=""
                        /> */}
                    </Box>
                    <Typography component="p">
                        by :{' '}
                        <span style={{ color: '#1D9F6E' }}>Wildan Wari</span>
                    </Typography>
                </Box>
            </Box>

            <Divider
                style={{ backgroundColor: '##DEDEDE', margin: '0   61px' }}
            />

            {/* This is the start of the duplicate */}
            <Box
                display="flex"
                flexDirection="row "
                className={classes.question}
            >
                <Box>
                    <img src={discThumbNail} height="120" width="auto" alt="" />{' '}
                </Box>
                <Box className={classes.questionContainer}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-around"
                    >
                        <Typography
                            component="p"
                            className={classes.questionPara}
                        >
                            Why do you have to <br />
                            go to Indonesia ?
                        </Typography>

                        {/* <img
                            src={saveIcon}
                            width="16px"
                            style={{ float: 'right' }}
                            height="20px"
                            alt=""
                        /> */}
                    </Box>
                    <Typography component="p">
                        by :{' '}
                        <span style={{ color: '#1D9F6E' }}>Wildan Wari</span>
                    </Typography>
                </Box>
            </Box>

            {/* ?End of the duplicate */}
            <Divider
                style={{ backgroundColor: '##DEDEDE', margin: '0   61px' }}
            />
        </Box>
    );
};

export default LatestDiscussions;
