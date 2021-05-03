import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btnContainer: {
        marginTop: '31px',
        marginBottom: '31px',
    },
    btn: {
        color: '#707070',
        width: 'auto',
        padding: '23px',
        height: '66px',
        fontSize: '13px',
        textTransform: 'capitalize',
        '&:hover': {
            boxShadow:
                '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            background: '#ffffff 0% 0% no-repeat padding-box',
        },
    },
});
const FeedCategories = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="row"
            p={1}
            className={classes.btnContainer}
        >
            <Button className={classes.btn}>Trending</Button>
            <Button className={classes.btn}>News</Button>
            <Button className={classes.btn}>Document</Button>
            <Button className={classes.btn}>Profile Updates</Button>
        </Box>
    );
};

export default FeedCategories;
