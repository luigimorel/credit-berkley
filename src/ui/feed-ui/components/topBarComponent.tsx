import { makeStyles, Box, useTheme, useMediaQuery } from '@material-ui/core';
import DropDownenu from './dropDownenu';
import InputComponent from './input.component';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '110px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
    },
    dropDownContainer: {
        marginLeft: '125px',
        display: 'flex',
        flexDirection: 'row',
    },
}));

const Topbar = () => {
    const classes = useStyles();

    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <Box
            display="flex"
            flexDirection="row"
            p={1}
            className={classes.mainContainer}
        >
            <InputComponent />

            <Box className={classes.dropDownContainer}>
                <DropDownenu />
            </Box>
        </Box>
    );
};

export default Topbar;
